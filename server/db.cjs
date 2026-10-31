const { PGlite } = require('@electric-sql/pglite');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, '../data/via_db');
if (!fs.existsSync(path.dirname(DB_PATH))) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
}

const db = new PGlite(DB_PATH);

async function initDatabase() {
  const schemaSql = `
    CREATE TABLE IF NOT EXISTS via_leads (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      service_interest TEXT DEFAULT 'general',
      project_details TEXT,
      budget_range TEXT,
      source_channel TEXT DEFAULT 'website_contact',
      status TEXT DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS via_audit_submissions (
      id TEXT PRIMARY KEY,
      lead_id TEXT,
      store_url TEXT NOT NULL,
      monthly_ad_spend NUMERIC DEFAULT 0,
      current_roas NUMERIC DEFAULT 0,
      primary_goal TEXT,
      calculated_score INTEGER DEFAULT 0,
      estimated_ad_waste NUMERIC DEFAULT 0,
      growth_potential_pct INTEGER DEFAULT 0,
      diagnostic_summary TEXT,
      delivery_status TEXT DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS via_services (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title_ar TEXT NOT NULL,
      short_desc TEXT NOT NULL,
      full_desc TEXT NOT NULL,
      icon_name TEXT NOT NULL,
      deliverables TEXT NOT NULL,
      benefits TEXT NOT NULL,
      is_active INTEGER DEFAULT 1,
      display_order INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS via_case_studies (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      client_sector TEXT NOT NULL,
      client_alias TEXT NOT NULL,
      challenge TEXT NOT NULL,
      solution_strategy TEXT NOT NULL,
      metric_stat TEXT NOT NULL,
      testimonial_quote TEXT NOT NULL,
      display_order INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS via_faqs (
      id TEXT PRIMARY KEY,
      question_ar TEXT NOT NULL,
      answer_ar TEXT NOT NULL,
      category TEXT DEFAULT 'general',
      display_order INTEGER DEFAULT 0
    );
  `;

  await db.exec(schemaSql);

  // Check if services exist, if not seed
  const countRes = await db.query('SELECT count(*) FROM via_services');
  if (parseInt(countRes.rows[0].count, 10) === 0) {
    console.log('Seeding initial VIA AI services and case studies...');
    
    // Seed Services
    const services = [
      {
        id: 'srv_seo',
        slug: 'seo-services',
        title_ar: 'تحسين محركات البحث (SEO & AI Search)',
        short_desc: 'تصدر نتائج Google ومحركات الذكاء الاصطناعي مثل ChatGPT وPerplexity لجذب عملاء يبحثون عنك بالفعل.',
        full_desc: 'نعمل على تهيئة الموقع تقنياً، وإعداد المحتوى المحسن لمحركات البحث ومحركات الإجابة بالذكاء الاصطناعي (GEO)، وبناء الروابط الموثوقة لرفع ترتيب موقعك وزيادة الزيارات المجانية عالية الجودة.',
        icon_name: 'Search',
        deliverables: JSON.stringify(['تدقيق تقني شامل للموقع', 'تهيئة الكلمات المفتاحية الاستراتيجية', 'بناء بنية المقالات والصفحات', 'التهيئة للظهور في محركات الذكاء الاصطناعي']),
        benefits: JSON.stringify(['زيادة الزيارات العضوية المجانية', 'خفض تكلفة اكتساب العميل (CAC)', 'بناء ثقة وسمعة رقمية دائمة']),
        order: 1
      },
      {
        id: 'srv_social',
        slug: 'social-media-management',
        title_ar: 'إدارة حسابات التواصل الاجتماعي',
        short_desc: 'صناعة محتوى تفاعلي وإدارة ذكية للمجتمعات على منصات X وتيك توك وإنستغرام ولينكد إن.',
        full_desc: 'استراتيجية نشر يومية مدروسة، وتصميم قوالب إبداعية، وتصوير منتجات عالي الدقة، ومتابعة التعليقات والرسائل لتحويل المتابعين إلى مشترين مخلصين.',
        icon_name: 'Share2',
        deliverables: JSON.stringify(['خطة محتوى شهرية بالذكاء الاصطناعي', 'تصميم منشورات وفيديوهات قصيرة (Reels)', 'إدارة الردود والتفاعل', 'تقارير أداء دورية بالأرقام']),
        benefits: JSON.stringify(['تعزيز الوعي بالعلامة التجارية', 'بناء مجتمع متفاعل ومخلص', 'تغذية الحملات الإعلانية بمحتوى عضوي قوي']),
        order: 2
      },
      {
        id: 'srv_ads',
        slug: 'ecommerce-marketing-solutions',
        title_ar: 'حلول المتاجر الإلكترونية والحملات الإعلانية',
        short_desc: 'إدارة الحملات الممولة على سناب شات، تيك توك، جوجل وميتا لتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS).',
        full_desc: 'تخطيط الحملات، واختبار الإعلانات المتعدد (A/B Testing)، وتحسين قمع المبيعات وسلات الشراء المتروكة لضمان تحقيق مبيعات حقيقية بأقل تكلفة.',
        icon_name: 'ShoppingBag',
        deliverables: JSON.stringify(['إعداد وتتبع البكسل والتحويلات المتقدمة', 'إعلانات سناب وتيك توك وجوجل برفورمانس ماكس', 'إعادة استهداف السلات المتروكة', 'لوحة تحكم مباشرة لقياس الـ ROAS']),
        benefits: JSON.stringify(['مضاعفة العائد الإعلاني (ROAS)', 'رفع معدل التحويل (Conversion Rate)', 'تقليل الهدر المالي في الإعلانات']),
        order: 3
      },
      {
        id: 'srv_influencer',
        slug: 'influencer-marketing-campaigns',
        title_ar: 'التسويق عبر المؤثرين',
        short_desc: 'ربط علامتك التجارية بأفضل المؤثرين وصناع المحتوى المناسبين لجمهورك لتحقيق انتشار واسع وتأثير ملموس.',
        full_desc: 'اختيار دقيق للمؤثرين بناءً على بيانات الجمهور الحقيقية، وإدارة العقود والتنفيذ، وقياس العائد الفعلي لكل حملة مؤثرين بعيداً عن الأرقام الوهمية.',
        icon_name: 'Users',
        deliverables: JSON.stringify(['تحليل بيانات المؤثرين ونسبة التفاعل الحقيقية', 'إعداد سكريبت وزاوية الطرح الإعلاني', 'متابعة التنفيذ واستلام التقارير', 'روابط تتبع وأكواد خصم مخصصة']),
        benefits: JSON.stringify(['انتشار سريع وثقة فورية لدى الجمهور', 'استهداف شرائح نوعية ذات قوة شرائية', 'قياس عائد الاستثمار بدقة']),
        order: 4
      },
      {
        id: 'srv_design',
        slug: 'graphic-design-services',
        title_ar: 'التصميم والتصوير الجرافيكي',
        short_desc: 'هوية بصرية إبداعية وتصاميم إعلانية جذابة تعبر عن قوة علامتك وتترك أثراً لا يُنسى.',
        full_desc: 'تصميم هويات بصرية متكاملة، وبنرات تسويقية، ومواد دعاية رقمية ومطبوعة مدروسة سيكولوجياً لجذب العين وتحفيز قرار الشراء.',
        icon_name: 'Palette',
        deliverables: JSON.stringify(['تصميم الهوية التجارية والبراندينج', 'تصاميم سوشيال ميديا وبنرات إعلانية', 'تصوير احترافي وتعديل المنتجات', 'ملفات المصدر المفتوحة']),
        benefits: JSON.stringify(['مظهر احترافي يعكس جودة خدماتك', 'رفع معدل النقر على الإعلانات (CTR)', 'ترسيخ الهوية في ذهن العميل']),
        order: 5
      },
      {
        id: 'srv_motion',
        slug: 'motion-graphic-services',
        title_ar: 'الموشن جرافيك والفيديو الإبداعي',
        short_desc: 'فيديوهات موشن جرافيك ورسوم متحركة تشرح فكرة مشروعك وتخطف انتباه العميل في أول 3 ثوانٍ.',
        full_desc: 'كتابة السيناريو الإبداعي، والرسم المخصص، والتحريك السلس، والتعليق الصوتي الاحترافي لنقل رسالتك التسويقية بوضوح وتأثير عالٍ.',
        icon_name: 'Film',
        deliverables: JSON.stringify(['كتابة سكريبت إعلاني مقنع', 'رسم ستوري بورد مخصص', 'تعليق صوتي خليجي وعربي محترف', 'تحريك موشن جرافيك فائق الدقة']),
        benefits: JSON.stringify(['شرح المنتجات والخدمات المعقدة ببساطة', 'زيادة مدة بقاء المستخدم وتفاعله', 'مضاعفة المشاركات والانتشار الفيروسي']),
        order: 6
      }
    ];

    for (const s of services) {
      await db.query(
        `INSERT INTO via_services (id, slug, title_ar, short_desc, full_desc, icon_name, deliverables, benefits, display_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [s.id, s.slug, s.title_ar, s.short_desc, s.full_desc, s.icon_name, s.deliverables, s.benefits, s.order]
      );
    }

    // Seed Case Studies
    const cases = [
      {
        id: 'cs_dates',
        slug: 'dates-sector',
        sector: 'قطاع بيع التمور',
        alias: 'شريك نجاح - متجر تمور فاخرة',
        challenge: 'تراجع مبيعات المتجر الإلكتروني وارتفاع تكلفة النقرة قبل موسم رمضان المبارك.',
        solution: 'إعادة تهيئة المتجر تقنياً، وإطلاق حملات إعادة استهداف ذكية بالذكاء الاصطناعي مع تحسين صفحات الهبوط.',
        metric: '+340% نمو المبيعات',
        quote: 'والله أكثر شيء عجبنا فيكم سرعة تجاوب الفريق واهتمامهم بالتفاصيل، تحس إنهم شريك معك مو مجرد جهة تنفذ المطلوب.',
        order: 1
      },
      {
        id: 'cs_archery',
        slug: 'archery-sector',
        sector: 'قطاع معدات الرماية',
        alias: 'شريك نجاح - متجر معدات الرماية والرحلات',
        challenge: 'ضعف العائد على الإعلانات وصعوبة الوصول للجمهور الرياضي المتخصص.',
        solution: 'حملات بحث دقيقة عبر Google وجلسات استشارية لإعادة تسعير العروض ودمج إعلانات المؤثرين المتخصصين.',
        metric: '4.8x العائد الإعلاني ROAS',
        quote: 'أكثر شيء عجبني في آخر اجتماع إن مهندس الحملات ما كان مركز على الإعلانات فقط، شاركني أفكار تسويقية مرة حلوة طبقتها، وبعد ثلاثة شهور شفنا أثرها على ربحية المحلات مو بس على نتائج الحملات.',
        order: 2
      },
      {
        id: 'cs_perfumes',
        slug: 'perfumes-sector',
        sector: 'قطاع العطور الفاخرة',
        alias: 'شريك نجاح - براند عطور سعودي',
        challenge: 'منافسة شرسة في سوق العطور وتحديات في ربحية الفروع والمتجر الإلكتروني.',
        solution: 'بناء هوية بصرية متميزة، وإعادة هيكلة سلات الشراء وإعلانات الفيديو القصيرة (UGC) مدعومة بسيو الذكاء الاصطناعي.',
        metric: '+185% طلبات جديدة',
        quote: 'كان هدفنا بالأول زيادة المبيعات وتجاوز تحديات الفروع والربحية. أكثر شيء فرق معنا إنكم حللتوا وضع العلامة حقتنا وحققتوا مبيعات حقيقية.',
        order: 3
      }
    ];

    for (const c of cases) {
      await db.query(
        `INSERT INTO via_case_studies (id, slug, client_sector, client_alias, challenge, solution_strategy, metric_stat, testimonial_quote, display_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [c.id, c.slug, c.sector, c.alias, c.challenge, c.solution, c.metric, c.quote, c.order]
      );
    }

    // Seed FAQs
    const faqs = [
      {
        id: 'faq_1',
        q: 'ما الذي يميز فيا (VIA) عن شركات التسويق التقليدية؟',
        a: 'ما يميز فيا هو دمج تقنيات الذكاء الاصطناعي المتقدمة مع الخبرة الاستراتيجية. نحن لا نطلق إعلانات عشوائية، بل نبدأ بإصلاح المشاكل التقنية في موقعك وتحليل سلوك العملاء لضمان أن كل ريال يُنفق يحقق عائداً ملموساً.',
        cat: 'general',
        order: 1
      },
      {
        id: 'faq_2',
        q: 'كيف تساعدني فيا في الظهور في محركات الذكاء الاصطناعي (مثل ChatGPT)؟',
        a: 'نطبق تقنيات GEO (Generative Engine Optimization) لتحسين المحتوى والبيانات المنظمة للعلامة التجارية بحيث تعتمدها نماذج الذكاء الاصطناعي كمصدر موثوق وترشح خدماتك للمستخدمين عند سؤالهم عن مجالك.',
        cat: 'seo',
        order: 2
      },
      {
        id: 'faq_3',
        q: 'كم تبلغ أسعار باقات التسويق لديكم؟',
        a: 'تختلف تكلفة الباقات وفقاً لاحتياج كل مشروع وأهدافه التسويقية وحجم المنافسة في قطاعه. نحن لا نقدم قوالب جاهزة للجميع، بل نقدم خطة مخصصة وعادلة تضمن أفضل عائد على استثمارك بعد الجلسة الاستشارية الأولى.',
        cat: 'pricing',
        order: 3
      },
      {
        id: 'faq_4',
        q: 'ما هي المدة المتوقعة لرؤية نتائج ملموسة؟',
        a: 'الحملات الإعلانية الممولة تبدأ في إعطاء نتائج ومؤشرات أولية خلال أول 7 إلى 14 يوماً مع استمرار التحسين، بينما استراتيجيات الـ SEO وصناعة المجتمع تستغرق من 30 إلى 90 يوماً لبناء نمو مستدام ومستقر.',
        cat: 'results',
        order: 4
      }
    ];

    for (const f of faqs) {
      await db.query(
        `INSERT INTO via_faqs (id, question_ar, answer_ar, category, display_order)
         VALUES ($1, $2, $3, $4, $5)`,
        [f.id, f.q, f.a, f.cat, f.order]
      );
    }
  }

  console.log('✓ Isolated VIA Database initialized successfully with verified seeds.');
}

// Data Access API
async function getServices() {
  const res = await db.query('SELECT * FROM via_services WHERE is_active = 1 ORDER BY display_order ASC');
  return res.rows.map(r => ({
    ...r,
    deliverables: JSON.parse(r.deliverables || '[]'),
    benefits: JSON.parse(r.benefits || '[]')
  }));
}

async function getCaseStudies() {
  const res = await db.query('SELECT * FROM via_case_studies ORDER BY display_order ASC');
  return res.rows;
}

async function getFaqs() {
  const res = await db.query('SELECT * FROM via_faqs ORDER BY display_order ASC');
  return res.rows;
}

async function createLead(data) {
  const id = 'lead_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  await db.query(
    `INSERT INTO via_leads (id, full_name, phone, email, service_interest, project_details, budget_range, source_channel, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [
      id,
      data.full_name || 'عميل محتمل',
      data.phone || '',
      data.email || null,
      data.service_interest || 'general',
      data.project_details || '',
      data.budget_range || null,
      data.source_channel || 'consultation_form',
      'new'
    ]
  );
  return { id, success: true };
}

async function saveAuditSubmission(data) {
  const id = 'audit_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  await db.query(
    `INSERT INTO via_audit_submissions (
       id, lead_id, store_url, monthly_ad_spend, current_roas, primary_goal,
       calculated_score, estimated_ad_waste, growth_potential_pct, diagnostic_summary, delivery_status
     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      id,
      data.lead_id || null,
      data.store_url || 'https://',
      Number(data.monthly_ad_spend) || 0,
      Number(data.current_roas) || 0,
      data.primary_goal || 'increase_sales',
      Number(data.calculated_score) || 65,
      Number(data.estimated_ad_waste) || 0,
      Number(data.growth_potential_pct) || 0,
      data.diagnostic_summary || '',
      'pending'
    ]
  );
  return { id, success: true };
}

async function listLeads() {
  const res = await db.query(`
    SELECT l.*, a.calculated_score, a.estimated_ad_waste, a.growth_potential_pct, a.store_url
    FROM via_leads l
    LEFT JOIN via_audit_submissions a ON a.lead_id = l.id
    ORDER BY l.created_at DESC
  `);
  return res.rows;
}

module.exports = {
  initDatabase,
  getServices,
  getCaseStudies,
  getFaqs,
  createLead,
  saveAuditSubmission,
  listLeads
};

