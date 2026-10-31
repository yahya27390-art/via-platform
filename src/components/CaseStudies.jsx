import React, { useState } from 'react';
import { TrendingUp, Award, BarChart3, ArrowLeft, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

const CATEGORIES = [
  { id: 'seo', name: 'تحسين محركات البحث' },
  { id: 'social', name: 'التسويق عبر وسائل التواصل الاجتماعي' },
  { id: 'ads', name: 'الحملات الإعلانية' }
];

const CLIENT_PROJECTS = [
  {
    category: 'ads',
    client: 'رجال البرية',
    sector: 'معدات رحلات وتخييم',
    image: './media/case-month.png',
    period: 'فترة شهر واحد',
    metric1: { label: 'إجمالي المبيعات', value: '2,480,000 ر.س' },
    metric2: { label: 'العائد الإعلاني (ROAS)', value: '4.8x' },
    metric3: { label: 'نمو الطلبات', value: '+142%' },
    story: 'إعادة هيكلة كاملة لحملات سناب شات وتيك توك مع استهداف خوارزمي دقيق لعشاق التخييم وموسم الشتاء في السعودية.'
  },
  {
    category: 'ads',
    client: 'أم نايف',
    sector: 'أغذية وتمور فاخرة',
    image: './media/case-zed.png',
    period: 'موسم رمضان والأعياد',
    metric1: { label: 'مبيعات المتجر', value: '1,120,000 ر.س' },
    metric2: { label: 'معدل العائد (ROAS)', value: '5.2x' },
    metric3: { label: 'انخفاض تكلفة الشراء', value: '-38%' },
    story: 'استراتيجية تسويق رقمي ذكية على متجر زد دمجت إعلانات الفيديو الإبداعية مع سيو الكلمات الشرائية الموسمية.'
  },
  {
    category: 'seo',
    client: 'ريلكسشن اند مور',
    sector: 'استجمام وعناية',
    image: './media/case-month.png',
    period: 'خلال 90 يوماً',
    metric1: { label: 'زيارات بحث مجانية', value: '85,000+' },
    metric2: { label: 'حجوزات مباشرة', value: '1,420 حجز' },
    metric3: { label: 'تصدر كلمات جوجل', value: '#1 في 45 كلمة' },
    story: 'تحسين محركات البحث المحلي والسيو الذكي لاحتلال المراتب الأولى في عمليات البحث عن مراكز العناية بالرياض وجدة.'
  },
  {
    category: 'social',
    client: 'شوجر هاوس',
    sector: 'حلويات ومقاهي',
    image: './media/case-zed.png',
    period: 'خلال 60 يوماً',
    metric1: { label: 'مشاهدات ريلز وتيك توك', value: '4.6M+' },
    metric2: { label: 'معدل التفاعل', value: '12.4%' },
    metric3: { label: 'نمو المتابعين', value: '+45,000' },
    story: 'صناعة محتوى فيروسي ومقاطع سينمائية قصيرة قادت إلى طوابير زيارات حقيقية للفروع وزيادة المبيعات بنسبة 85%.'
  },
  {
    category: 'seo',
    client: 'مركز اللؤلؤة',
    sector: 'عطور ومستحضرات تجميل',
    image: './media/case-month.png',
    period: 'خلال 4 أشهر',
    metric1: { label: 'إجمالي إيرادات السيو', value: '890,000 ر.س' },
    metric2: { label: 'عائد الاستثمار (ROI)', value: '620%' },
    metric3: { label: 'تصدر محركات البحث بالذكاء الاصطناعي', value: 'ظهور في ChatGPT و Gemini' },
    story: 'تهيئة متجر العطور للظهور كإجابة أولى وموصى بها في محركات الذكاء الاصطناعي وتصدر بحث Google الشامل.'
  }
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('ads');
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const filteredProjects = CLIENT_PROJECTS.filter(p => p.category === activeCategory);
  const currentProject = filteredProjects[selectedClientIndex] || filteredProjects[0];

  return (
    <section id="works" className="py-24 relative overflow-hidden bg-[#0a0024]/80 border-t border-[#8551ef]/20">
      
      {/* Background Neon Blurs */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#ce23bd]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160a38] border border-[#ce23bd]/40 shadow-[0_0_20px_rgba(206,35,189,0.25)] text-[#ce23bd] text-xs font-bold mb-4">
            <Award className="w-4 h-4" />
            <span>نتائجنا في التحسين</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            أعمالنا | <span className="gradient-text-via">نتائج تتحدث عن قوة المحتوى الذكي</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            أرقام حقيقية وموثقة من لوحات تحكم عملائنا في مختلف القطاعات التجارية بالسعودية.
          </p>
        </div>

        {/* Category Switcher Tabs (From Reference Site) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedClientIndex(0);
              }}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'btn-via-primary text-white scale-105'
                  : 'bg-[#10072b] border border-[#8551ef]/20 text-slate-400 hover:text-white hover:border-[#ce23bd]/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Brand Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filteredProjects.map((p, idx) => (
            <button
              key={p.client}
              onClick={() => setSelectedClientIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedClientIndex === idx
                  ? 'bg-[#ce23bd]/20 border border-[#ce23bd] text-white shadow-[0_0_15px_rgba(206,35,189,0.4)]'
                  : 'bg-[#0e0428] border border-[#8551ef]/15 text-slate-400 hover:text-slate-200'
              }`}
            >
              {p.client}
            </button>
          ))}
        </div>

        {/* Showcase Feature Card with Screenshot */}
        {currentProject && (
          <div className="via-card p-6 sm:p-10 rounded-3xl border border-[#ce23bd]/30 shadow-[0_20px_50px_rgba(9,0,31,0.9)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column (Screenshot) */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ce23bd]/40 to-[#8551ef]/40 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-[#8551ef]/40 bg-[#09001f]">
                  <img
                    src={currentProject.image}
                    alt={currentProject.client}
                    className="w-full h-auto max-h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/10 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{currentProject.period} (لوحة تحكم حقيقية)</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Metrics & Analysis) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#ce23bd]/15 text-[#ce23bd] text-xs font-bold mb-2">
                    {currentProject.sector}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {currentProject.client}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {currentProject.story}
                  </p>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#120738] border border-[#ce23bd]/25 text-center">
                    <div className="text-[10px] text-slate-400">{currentProject.metric1.label}</div>
                    <div className="text-sm sm:text-base font-black text-white font-mono mt-1">
                      {currentProject.metric1.value}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#120738] border border-[#ce23bd]/25 text-center">
                    <div className="text-[10px] text-slate-400">{currentProject.metric2.label}</div>
                    <div className="text-sm sm:text-base font-black text-[#ce23bd] font-mono mt-1">
                      {currentProject.metric2.value}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#120738] border border-[#ce23bd]/25 text-center">
                    <div className="text-[10px] text-slate-400">{currentProject.metric3.label}</div>
                    <div className="text-sm sm:text-base font-black text-emerald-400 font-mono mt-1">
                      {currentProject.metric3.value}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn-via-primary w-full py-3.5 rounded-2xl text-xs font-black text-white flex items-center justify-center gap-2"
                >
                  <span>حقق نفس النتائج لمتجرك الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
