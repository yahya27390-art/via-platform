import React, { useState, useEffect } from 'react';
import { Trophy, TrendingUp, Quote, Star, ArrowLeft } from 'lucide-react';

const DEFAULT_CASES = [
  {
    id: 'cs_dates',
    slug: 'dates-sector',
    client_sector: 'قطاع بيع التمور',
    client_alias: 'شريك نجاح - متجر تمور فاخرة',
    challenge: 'تراجع مبيعات المتجر الإلكتروني وارتفاع تكلفة النقرة قبل موسم رمضان المبارك.',
    solution_strategy: 'إعادة تهيئة المتجر تقنياً، وإطلاق حملات إعادة استهداف ذكية بالذكاء الاصطناعي مع تحسين صفحات الهبوط.',
    metric_stat: '+340% نمو المبيعات',
    testimonial_quote: 'والله أكثر شيء عجبنا فيكم سرعة تجاوب الفريق واهتمامهم بالتفاصيل، تحس إنهم شريك معك مو مجرد جهة تنفذ المطلوب.'
  },
  {
    id: 'cs_archery',
    slug: 'archery-sector',
    client_sector: 'قطاع معدات الرماية',
    client_alias: 'شريك نجاح - متجر معدات الرماية والرحلات',
    challenge: 'ضعف العائد على الإعلانات وصعوبة الوصول للجمهور الرياضي المتخصص.',
    solution_strategy: 'حملات بحث دقيقة عبر Google وجلسات استشارية لإعادة تسعير العروض ودمج إعلانات المؤثرين المتخصصين.',
    metric_stat: '4.8x العائد الإعلاني ROAS',
    testimonial_quote: 'أكثر شيء عجبني في آخر اجتماع إن مهندس الحملات ما كان مركز على الإعلانات فقط، شاركني أفكار تسويقية مرة حلوة طبقتها، وبعد ثلاثة شهور شفنا أثرها على ربحية المحلات مو بس على نتائج الحملات.'
  },
  {
    id: 'cs_perfumes',
    slug: 'perfumes-sector',
    client_sector: 'قطاع العطور الفاخرة',
    client_alias: 'شريك نجاح - براند عطور سعودي',
    challenge: 'منافسة شرسة في سوق العطور وتحديات في ربحية الفروع والمتجر الإلكتروني.',
    solution_strategy: 'بناء هوية بصرية متميزة، وإعادة هيكلة سلات الشراء وإعلانات الفيديو القصيرة (UGC) مدعومة بسيو الذكاء الاصطناعي.',
    metric_stat: '+185% طلبات جديدة',
    testimonial_quote: 'كان هدفنا بالأول زيادة المبيعات وتجاوز تحديات الفروع والربحية. أكثر شيء فرق معنا إنكم حللتوا وضع العلامة حقتنا وحققتوا مبيعات حقيقية.'
  }
];

export default function CaseStudies() {
  const [cases, setCases] = useState(DEFAULT_CASES);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch('/api/case-studies')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data?.length > 0) {
          setCases(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const currentCase = cases[activeTab] || cases[0];

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
            <Trophy className="w-4 h-4" />
            <span>شهادات تصنع الثقة ونتائج تتحدث بالأرقام</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-cairo text-white mb-4">
            قصص نجاح عملائنا | نتائج تتحدث عن نفسها
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            نعتز بشراكتنا مع علامات تجارية رائدة في السوق السعودي حققنا معها قفزات نوعية في المبيعات والعائد الإعلاني.
          </p>
        </div>

        {/* Sector Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                activeTab === idx
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {c.client_sector}
            </button>
          ))}
        </div>

        {/* Active Case Study Showcase Card */}
        {currentCase && (
          <div className="glass-panel rounded-3xl border border-slate-800 p-6 sm:p-10 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-7 space-y-5 text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-bold">
                  <span>{currentCase.client_alias}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-cairo text-white">
                  {currentCase.client_sector}
                </h3>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-rose-500/20">
                    <span className="font-bold text-rose-400 block mb-1">⚠️ التحدي قبل التعاقد:</span>
                    <span className="text-slate-300">{currentCase.challenge}</span>
                  </div>

                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-cyan-500/20">
                    <span className="font-bold text-cyan-400 block mb-1">⚡ خطة العلاج الذكية مع فيا:</span>
                    <span className="text-slate-300">{currentCase.solution_strategy}</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 relative">
                  <Quote className="w-6 h-6 text-cyan-500/30 absolute top-3 left-3" />
                  <div className="flex items-center gap-1 mb-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-200 italic leading-relaxed">
                    "{currentCase.testimonial_quote}"
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Metric Badge */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 text-center relative shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  النتيجة المحققة بالأرقام
                </div>
                <div className="text-4xl sm:text-5xl font-black font-cairo text-emerald-400 mb-4 tracking-tight">
                  {currentCase.metric_stat}
                </div>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  تم قياس وتوثيق هذه النتيجة على مدار 90 يوماً متواصلة من التحسين التقني والإعلاني.
                </p>

                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>حقق نتائج مماثلة لمشروعك الآن</span>
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

