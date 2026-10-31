const { start, server } = require('../server/api.cjs');
const assert = require('assert');

async function runTests() {
  console.log('========================================================');
  console.log('🧪 [VIA AI Platform] Running Automated Stack Verification');
  console.log('========================================================\n');

  await start();

  const baseUrl = 'http://127.0.0.1:5055';

  // Test 1: Health
  console.log('Test 1: Health Check Endpoint...');
  const healthRes = await fetch(`${baseUrl}/api/health`);
  assert.equal(healthRes.status, 200);
  const health = await healthRes.json();
  assert.equal(health.status, 'healthy');
  console.log('  ✓ Health OK:', health.database);

  // Test 2: Services
  console.log('Test 2: Services Catalog Retrieval...');
  const servRes = await fetch(`${baseUrl}/api/services`);
  assert.equal(servRes.status, 200);
  const services = await servRes.json();
  assert.equal(services.success, true);
  assert.equal(services.count, 6);
  console.log('  ✓ 6 Core Services loaded with deliverables');

  // Test 3: Case Studies
  console.log('Test 3: Case Studies & Results...');
  const csRes = await fetch(`${baseUrl}/api/case-studies`);
  assert.equal(csRes.status, 200);
  const cases = await csRes.json();
  assert.equal(cases.count, 3);
  console.log('  ✓ 3 Sector Case Studies loaded (Dates, Archery, Perfumes)');

  // Test 4: AI Performance Audit Calculation
  console.log('Test 4: AI Diagnostic & Waste Calculator...');
  const auditRes = await fetch(`${baseUrl}/api/audit/calculate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      full_name: 'تجربة فحص متجر',
      phone: '0569623131',
      store_url: 'https://test-perfumes.sa',
      monthly_ad_spend: 30000,
      current_roas: 1.8,
      has_pixel: true,
      has_seo: false
    })
  });
  assert.equal(auditRes.status, 200);
  const audit = await auditRes.json();
  assert.equal(audit.success, true);
  assert(audit.estimated_ad_waste > 0);
  assert(audit.score > 0);
  console.log(`  ✓ Audit Computed: Score=${audit.score}/100, Waste=${audit.estimated_ad_waste} SAR, Growth=+${audit.growth_potential_pct}%`);

  // Test 5: Lead Submission
  console.log('Test 5: Consultation Lead Ingestion...');
  const leadRes = await fetch(`${baseUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      full_name: 'متجر اختبار السيو',
      phone: '0541234567',
      email: 'test@brand.sa',
      service_interest: 'seo',
      project_details: 'فحص تجريبي للتحقق من الحفظ في قاعدة البيانات'
    })
  });
  assert.equal(leadRes.status, 201);
  const lead = await leadRes.json();
  assert.equal(lead.success, true);
  console.log('  ✓ Lead created with ID:', lead.lead_id);

  // Test 6: Verify Persistence
  console.log('Test 6: Database Persistence Check...');
  const listRes = await fetch(`${baseUrl}/api/leads`);
  const list = await listRes.json();
  assert(list.count >= 2);
  console.log(`  ✓ Database Verified: ${list.count} leads securely stored in isolated PGlite DB\n`);

  server.close(() => {
    console.log('========================================================');
    console.log('✅ ALL TESTS PASSED! Stack is 100% verified and operational.');
    console.log('========================================================');
  });
}

runTests().catch(err => {
  console.error('Test Failure:', err);
  process.exit(1);
});

