import React, { useState, useEffect } from 'react';
import { Search, Share2, ShoppingBag, Users, Palette, Film, CheckCircle2, ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';

const ICON_MAP = {
  Search,
  Share2,
  ShoppingBag,
  Users,
  Palette,
  Film
};

const DEFAULT_SERVICES = [
  {
    id: 'srv_seo',
    slug: 'seo-services',
    title_ar: 'تحسين محركات البحث وسيو الذكاء الاصطناعي (SEO & GEO)',
    short_desc: 'تصدر نتائج Google ومحركات الذكاء الاصطناعي مثل ChatGPT وPerplexity لجذب عملاء يبحثون عنك بالفعل.',
    full_desc: 'نعمل على تهيئة الموقع تقنياً، وإعداد المحتوى المحسن لمحركات البحث ومحركات الإجابة بالذكاء الاصطناعي (GEO)، وبناء الروابط الموثوقة لرفع ترتيب موقعك وزيادة الزيارات المجانية عالية الجودة.',
    icon_name: 'Search',
    deliverables: ['تدقيق تقني شامل للموقع', 'تهيئة الكلمات المفتاحية الاستراتيجية', 'بناء بنية المقالات والصفحات', 'التهيئة للظهور في محركات الذكاء الاصطناعي'],
    benefits: ['زيادة الزيارات العضوية المجانية', 'خفض تكلفة اكتساب العميل (CAC)', 'بناء ثقة وسمعة رقمية دائمة']
  },
  {
    id: 'srv_social',
    slug: 'social-media-management',
    title_ar: 'إدارة حسابات التواصل الاجتماعي',
    short_desc: 'صناعة محتوى تفاعلي وإدارة ذكية للمجتمعات على منصات X وتيك توك وإنستغرام ولينكد إن.',
    full_desc: 'استراتيجية نشر يومية مدروسة، وتصميم قوالب إبداعية، وتصوير منتجات عالي الدقة، ومتابعة التعليقات والرسائل لتحويل المتابعين إلى مشترين مخلصين.',
    icon_name: 'Share2',
    deliverables: ['خطة محتوى شهرية بالذكاء الاصطناعي', 'تصميم منشورات وفيديوهات قصيرة (Reels)', 'إدارة الردود والتفاعل', 'تقارير أداء دورية بالأرقام'],
    benefits: ['تعزيز الوعي بالعلامة التجارية', 'بناء مجتمع متفاعل ومخلص', 'تغذية الحملات الإعلانية بمحتوى عضوي قوي']
  },
  {
    id: 'srv_ads',
    slug: 'ecommerce-marketing-solutions',
    title_ar: 'حلول المتاجر الإلكترونية والحملات الإعلانية',
    short_desc: 'إدارة الحملات الممولة على سناب شات، تيك توك، جوجل وميتا لتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS).',
    full_desc: 'تخطيط الحملات، واختبار الإعلانات المتعدد (A/B Testing)، وتحسين قمع المبيعات وسلات الشراء المتروكة لضمان تحقيق مبيعات حقيقية بأقل تكلفة.',
    icon_name: 'ShoppingBag',
    deliverables: ['إعداد وتتبع البكسل والتحويلات المتقدمة', 'إعلانات سناب وتيك توك وجوجل برفورمانس ماكس', 'إعادة استهداف السلات المتروكة', 'لوحة تحكم مباشرة لقياس الـ ROAS'],
    benefits: ['مضاعفة العائد الإعلاني (ROAS)', 'رفع معدل التحويل (Conversion Rate)', 'تقليل الهدر المالي في الإعلانات']
  },
  {
    id: 'srv_influencer',
    slug: 'influencer-marketing-campaigns',
    title_ar: 'التسويق عبر المؤثرين وصناع المحتوى',
    short_desc: 'ربط علامتك التجارية بأفضل المؤثرين وصناع المحتوى المناسبين لجمهورك لتحقيق انتشار واسع وتأثير ملموس.',
    full_desc: 'اختيار دقيق للمؤثرين بناءً على بيانات الجمهور الحقيقية، وإدارة العقود والتنفيذ، وقياس العائد الفعلي لكل حملة مؤثرين بعيداً عن الأرقام الوهمية.',
    icon_name: 'Users',
    deliverables: ['تحليل بيانات المؤثرين ونسبة التفاعل الحقيقية', 'إعداد سكريبت وزاوية الطرح الإعلاني', 'متابعة التنفيذ واستلام التقارير', 'روابط تتبع وأكواد خصم مخصصة'],
    benefits: ['انتشار سريع وثقة فورية لدى الجمهور', 'استهداف شرائح نوعية ذات قوة شرائية', 'قياس عائد الاستثمار بدقة']
  },
  {
    id: 'srv_design',
    slug: 'graphic-design-services',
    title_ar: 'التصميم والتصوير الجرافيكي الإبداعي',
    short_desc: 'هوية بصرية إبداعية وتصاميم إعلانية جذابة تعبر عن قوة علامتك وتترك أثراً لا يُنسى.',
    full_desc: 'تصميم هويات بصرية متكاملة، وبنرات تسويقية، ومواد دعاية رقمية ومطبوعة مدروسة سيكولوجياً لجذب العين وتحفيز قرار الشراء.',
    icon_name: 'Palette',
    deliverables: ['تصميم الهوية التجارية والبراندينج', 'تصاميم سوشيال ميديا وبنرات إعلانية', 'تصوير احترافي وتعديل المنتجات', 'ملفات المصدر المفتوحة'],
    benefits: ['مظهر احترافي يعكس جودة خدماتك', 'رفع معدل النقر على الإعلانات (CTR)', 'ترسيخ الهوية في ذهن العميل']
  },
  {
    id: 'srv_motion',
    slug: 'motion-graphic-services',
    title_ar: 'الموشن جرافيك والفيديو الترويجي',
    short_desc: 'فيديوهات موشن جرافيك ورسوم متحركة تشرح فكرة مشروعك وتخطف انتباه العميل في أول 3 ثوانٍ.',
    full_desc: 'كتابة السيناريو الإبداعي، والرسم المخصص، والتحريك السلس، والتعليق الصوتي الاحترافي لنقل رسالتك التسويقية بوضوح وتأثير عالٍ.',
    icon_name: 'Film',
    deliverables: ['كتابة سكريبت إعلاني مقنع', 'رسم ستوري بورد مخصص', 'تعليق صوتي خليجي وعربي محترف', 'تحريك موشن جرافيك فائق الدقة'],
    benefits: ['شرح المنتجات والخدمات المعقدة ببساطة', 'زيادة مدة بقاء المستخدم وتفاعله', 'مضاعفة المشاركات والانتشار الفيروسي']
  }
];

export default function ServicesCatalog() {
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data?.length > 0) {
          setServices(data.data);
        }
      })
      .catch(() => {
        // Keep default services fallback
      });
  }, []);

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>حلول رقمية متكاملة مدعومة بالذكاء الاصطناعي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-cairo text-white mb-4">
            اكتشف خدماتنا المتكاملة لنمو أعمالك
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            نقدم منظومة تسويق رقمي شاملة تجمع بين دقة الذكاء الاصطناعي والخبرة الإبداعية لبناء نتائج تسويقية قابلة للقياس والنمو.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const Icon = ICON_MAP[srv.icon_name] || Sparkles;
            return (
              <div
                key={srv.id}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-all duration-500" />

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 mb-5 shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-base sm:text-lg font-black font-cairo text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {srv.title_ar}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {srv.short_desc}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {srv.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="text-xs font-bold text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>تفاصيل الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send/?phone=966569623131&text=السلام%20عليكم،%20أرغب%20في%20الاستفسار%20عن%20خدمة%20(${encodeURIComponent(srv.title_ar)})%20مع%20فيا%20(VIA%20AI)&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-black transition-all flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 text-cyan-400" />
                    <span>ابدأ الآن</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white text-sm font-bold bg-slate-900 w-8 h-8 rounded-full flex items-center justify-center border border-slate-800"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                VIA Service Scope
              </span>
              <h3 className="text-xl font-black font-cairo text-white mt-2 mb-3">
                {selectedService.title_ar}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedService.full_desc}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>ماذا ستحصل عليه في هذه الخدمة:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>الأثر المباشر على مبيعات متجرك:</span>
              </h4>
              <div className="space-y-2">
                {selectedService.benefits.map((b, idx) => (
                  <div key={idx} className="text-xs text-emerald-300 bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20 flex items-center gap-2 font-medium">
                    <span>✨</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://api.whatsapp.com/send/?phone=966569623131&text=مرحباً%20فيا،%20أرغب%20في%20بدء%20العمل%20على%20خدمة%20(${encodeURIComponent(selectedService.title_ar)})%20لمشروعي.&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب الخدمة عبر واتساب الآن</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

