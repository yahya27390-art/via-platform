import React, { useState } from 'react';
import { Sparkles, ArrowLeft, CheckCircle2, ChevronRight, X } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'ecommerce',
    title: 'حلول المتاجر الإلكترونية',
    desc: 'تصميم وبناء متاجر سلة وزد وشوبيفاي متوافقة 100% مع معايير التحويل، مع تحسين رحلة العميل ورفع متوسط قيمة السلة.',
    iconImg: './media/service-ecommerce.webp',
    tag: 'متاجر سلة وزد',
    deliverables: [
      'تهيئة واجهات الشراء وحل مشكلات السلات المتروكة',
      'ربط بكسلات التتبع المتقدمة وإشارات التحويل CAPI',
      'تحسين سرعة التصفح وتجربة المستخدم على الجوال'
    ]
  },
  {
    id: 'ads',
    title: 'إدارة الحملات الإعلانية (Performance Ads)',
    desc: 'استثمر بذكاء: إدارة الحملات الإعلانية الموجهة بدقة عبر سناب شات، تيك توك، ميتا، وجوجل مع تحسين العائد ROAS يومياً.',
    iconImg: './media/service-ads.webp',
    tag: 'ROAS مضاعف',
    deliverables: [
      'استهداف خوارزمي دقيق للجمهور الشرائي المستعد للطلب',
      'اختبارات A/B مستمرة للإعلانات والنصوص التسويقية',
      'تقارير أداء دورية شفافة توضح العائد مقابل كل ريال منفوق'
    ]
  },
  {
    id: 'seo',
    title: 'تحسين محركات البحث (SEO)',
    desc: 'تصدر نتائج بحث جوجل ومحركات الذكاء الاصطناعي (ChatGPT / Gemini) لاكتساب عملاء دائمين بأعلى عائد وأقل تكلفة.',
    iconImg: './media/service-seo.webp',
    tag: 'سيو الذكاء الاصطناعي',
    deliverables: [
      'بناء خارطة كلمات مفتاحية شرائية عالية الطلب',
      'تحسين السيو التقني وبناء الروابط الخلفية القوية',
      'تهيئة المحتوى لمحركات بحث الذكاء الاصطناعي (GEO / AI Overviews)'
    ]
  },
  {
    id: 'social',
    title: 'إدارة منصات التواصل الاجتماعي',
    desc: 'صناعة محتوى إبداعي مستمر وتفاعل حقيقي مع الجمهور يعزز ولاء العلامة التجارية ويضاعف المتابعين والطلبات.',
    iconImg: './media/ادارة-منصات-التواصل-الاجتماعي.webp',
    tag: 'محتوى فيروسي',
    deliverables: [
      'تقويم محتوى شهري جذاب مبني على التوجهات والترندات',
      'تصاميم بصرية وفيديوهات ريلز وتيك توك سريعة الانتشار',
      'إدارة الردود والتفاعل السريع مع استفسارات العملاء'
    ]
  },
  {
    id: 'design',
    title: 'التصميم والتصوير الجرافيكي وموشن',
    desc: 'هوية بصرية فاخرة، وتصوير سينمائي للمنتجات، وموشن جرافيك يروي قصة علامتك التجارية بطريقة تعلق في أذهان العملاء.',
    iconImg: './media/service-ecommerce.webp',
    tag: 'إبداع بصري',
    deliverables: [
      'تصوير احترافي وإخراج مرئي عالي الدقة للمنتجات',
      'فيديوهات موشن جرافيك توضيحية لخدماتك ومنتجاتك',
      'تصاميم بنرات إعلانية مبتكرة ترفع معدل النقر (CTR)'
    ]
  },
  {
    id: 'ai-solutions',
    title: 'حلول واستراتيجيات الذكاء الاصطناعي',
    desc: 'دقة وكفاءة غير مسبوقة: تحليل سلوك الجمهور وبناء روبوتات محادثة ذكية وأتمتة مسارات التسويق بأحدث أدوات الـ AI.',
    iconImg: './media/service-seo.webp',
    tag: 'أتمتة ذكية',
    deliverables: [
      'أتمتة خدمة العملاء والرد على طلبات الشراء فوراً',
      'تنبؤ باحتياجات السوق والعملاء وسلوك الشراء المستقبلي',
      'تحليل منافسين لحظي وتقديم توصيات تطويرية مستمرة'
    ]
  }
];

export default function ServicesCatalog() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] text-emerald-300 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>خدمات تسويق رقمي متكاملة لنمو أعمالك</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            خدمات <span className="gradient-text-via">Green Arrow المتكاملة</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            نجمع بين الذكاء الاصطناعي واستراتيجيات إعلانات الأداء (Performance Ads) لتقديم حلول شاملة تغطي كل مرحلة في رحلة عميلك من لحظة الظهور وحتى إتمام الشراء.
          </p>
        </div>

        {/* Services 3x2 Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              data-reveal="fade-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="via-card p-7 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* 3D Icon Container */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-20 h-20 rounded-2xl bg-[#09120c] border border-emerald-500/30 flex items-center justify-center p-2 shadow-[0_10px_25px_rgba(5,8,6,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={srv.iconImg}
                      alt={srv.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_5px_10px_rgba(34,197,94,0.35)]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                    {srv.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {srv.desc}
                </p>

                {/* Deliverables Bullet points */}
                <ul className="space-y-2 mb-6 border-t border-emerald-500/15 pt-4">
                  {srv.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-emerald-500/15 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  معرفة المزيد
                </button>

                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
                >
                  <span>ابدأ الآن</span>
                  <ArrowLeft className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="via-card max-w-lg w-full p-6 sm:p-8 rounded-3xl relative border border-emerald-500/50 bg-[#080d0a]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 left-5 p-2 rounded-xl bg-[#0e1812] text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-[#0e1812] p-2 border border-emerald-500/30">
                <img src={selectedService.iconImg} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                <span className="text-xs text-emerald-400 font-bold">{selectedService.tag}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.desc}
            </p>

            <div className="space-y-3 mb-8">
              <div className="text-xs font-bold text-white">ما ستحصل عليه مع Green Arrow:</div>
              {selectedService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#060a08] p-2.5 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setSelectedService(null)}
              className="btn-via-primary w-full py-3.5 rounded-xl text-center text-xs font-black text-black block"
            >
              طلب استشارة لهذه الخدمة
            </a>
          </div>
        </div>
      )}

    </section>
  );
}
