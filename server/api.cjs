const http = require('http');
const url = require('url');
const {
  initDatabase,
  getServices,
  getCaseStudies,
  getFaqs,
  createLead,
  saveAuditSubmission,
  listLeads
} = require('./db.cjs');

const PORT = process.env.VIA_PORT || 5055;

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function sendJson(res, statusCode, data) {
  setCorsHeaders(res);
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.writeHead(statusCode);
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

// AI Diagnostic Calculator
function calculatePerformanceMetrics(params) {
  const spend = Number(params.monthly_ad_spend) || 10000;
  const roas = Number(params.current_roas) || 2.2;
  const channel = params.primary_channel || 'mixed';
  const hasPixel = params.has_pixel !== false;
  const hasSeo = params.has_seo === true;

  // Waste estimate calculation:
  // Typical untrained ad setups leak 25% to 42% on bad placements, overlapping audiences & friction
  let wasteRatio = 0.32;
  if (roas < 1.8) wasteRatio = 0.45;
  else if (roas > 3.5) wasteRatio = 0.18;

  if (!hasPixel) wasteRatio += 0.08;
  if (!hasSeo) wasteRatio += 0.05;

  const estimatedWaste = Math.round(spend * wasteRatio);

  // Score from 0 to 100
  let score = Math.round((roas / 4.5) * 60);
  if (hasPixel) score += 20;
  if (hasSeo) score += 15;
  score = Math.max(25, Math.min(94, score));

  // Potential growth multiplier
  const growthPct = Math.round((1 - (roas / 4.5)) * 140) + 30;

  const summary = `بناءً على ميزانية شهرية ${spend.toLocaleString('ar-SA')} ر.س ومعدل عائد ${roas}x، يقدر الهدر الإعلاني التقريبي بـ ${estimatedWaste.toLocaleString('ar-SA')} ر.س شهرياً بسبب ضعف الاستهداف التقني وقمع التحويل. تطبيق استراتيجية فيا بالذكاء الاصطناعي يمكن أن يرفع الكفاءة بنسبة +${growthPct}%.`;

  return {
    score,
    estimated_ad_waste: estimatedWaste,
    growth_potential_pct: Math.max(35, Math.min(220, growthPct)),
    diagnostic_summary: summary
  };
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || '127.0.0.1'}`);
  const path = parsedUrl.pathname;

  try {
    if (req.method === 'GET' && path === '/api/health') {
      return sendJson(res, 200, { status: 'healthy', app: 'VIA AI Platform Backend', database: 'isolated_pglite' });
    }

    if (req.method === 'GET' && path === '/api/services') {
      const services = await getServices();
      return sendJson(res, 200, { success: true, count: services.length, data: services });
    }

    if (req.method === 'GET' && path === '/api/case-studies') {
      const cases = await getCaseStudies();
      return sendJson(res, 200, { success: true, count: cases.length, data: cases });
    }

    if (req.method === 'GET' && path === '/api/faqs') {
      const faqs = await getFaqs();
      return sendJson(res, 200, { success: true, count: faqs.length, data: faqs });
    }

    if (req.method === 'POST' && path === '/api/leads') {
      const body = await parseBody(req);
      if (!body.phone || body.phone.trim().length < 8) {
        return sendJson(res, 400, { success: false, message: 'رقم الهاتف مطلوب للتواصل.' });
      }
      const result = await createLead(body);
      return sendJson(res, 201, { success: true, lead_id: result.id, message: 'تم استلام طلب الاستشارة بنجاح.' });
    }

    if (req.method === 'POST' && path === '/api/audit/calculate') {
      const body = await parseBody(req);
      const metrics = calculatePerformanceMetrics(body);

      let leadId = null;
      if (body.phone) {
        const leadRes = await createLead({
          full_name: body.full_name || 'زائر أداة مقياس الأداء',
          phone: body.phone,
          email: body.email,
          service_interest: 'ai_audit_tool',
          project_details: `متجر: ${body.store_url || 'غير محدد'} | ميزانية: ${body.monthly_ad_spend || 0} ر.س | ROAS: ${body.current_roas || 0}`,
          source_channel: 'performance_meter'
        });
        leadId = leadRes.id;
      }

      const auditRes = await saveAuditSubmission({
        ...body,
        lead_id: leadId,
        ...metrics
      });

      return sendJson(res, 200, {
        success: true,
        audit_id: auditRes.id,
        ...metrics
      });
    }

    if (req.method === 'GET' && path === '/api/leads') {
      const leads = await listLeads();
      return sendJson(res, 200, { success: true, count: leads.length, data: leads });
    }

    sendJson(res, 404, { success: false, message: 'Endpoint not found' });
  } catch (err) {
    console.error('API Error:', err);
    sendJson(res, 500, { success: false, error: err.message });
  }
});

async function start() {
  await initDatabase();
  server.listen(PORT, '127.0.0.1', () => {
    console.log(`🚀 [VIA AI Backend] Running at http://127.0.0.1:${PORT}`);
  });
}

if (require.main === module) {
  start();
}

module.exports = { server, start };
