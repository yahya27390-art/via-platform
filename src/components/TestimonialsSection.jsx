import React from 'react';
import { Quote, Star, Sparkles, ShieldCheck } from 'lucide-react';

const TESTIMONIALS = [
  {
    sector: 'قطاع بيع التمور والأغذية الفاخرة',
    partner: 'شريك نجاح في قطاع التمور',
    badge: 'مبيعات مواسم وأعياد',
    quote: 'والله أكثر شيء عجبنا فيكم سرعة تجاوب الفريق واهتمامهم بالتفاصيل، تحس إنهم شريك معك مو مجرد جهة تنفذ المطلوب.',
    rating: 5,
    growth: '+180% نمو المبيعات'
  },
  {
    sector: 'قطاع معدات الرحلات والتخييم',
    partner: 'شريك نجاح في قطاع الرحلات',
    badge: 'حملات ممولة وسيو',
    quote: 'أكثر شيء عجبني في آخر اجتماع إن مهندس الحملات ما كان مركز على الإعلانات فقط، شاركني أفكار تسويقية مرة حلوة طبقتها، وبعد ثلاثة شهور شفنا أثرها على ربحية المحلات مو بس على نتائج الحملات.',
    rating: 5,
    growth: '4.8x ROAS'
  },
  {
    sector: 'قطاع العطور ومستحضرات التجميل',
    partner: 'شريك نجاح من قطاع العطور',
    badge: 'توسع وانتشار رقمي',
    quote: 'كان هدفنا بالأول زيادة المبيعات وتجاوز تحديات الفروع والربحية. أكثر شيء فرق معنا إنكم حللتوا وضع العلامة حقتنا وحققتوا مبيعات وتوسع كبير.',
    rating: 5,
    growth: '620% عائد الاستثمار'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#050806]">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] text-emerald-300 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>شهادات تصنع الثقة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            قصص نجاح شركائنا | <span className="gradient-text-via">مع Green Arrow</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            نعتز بثقة عملائنا وشراكتنا معهم، ونترك لهم مساحة لمشاركة تجاربهم والنتائج الحقيقية التي حققوها معنا.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              data-reveal="fade-up"
              style={{ transitionDelay: `${idx * 130}ms` }}
              className="via-card p-8 rounded-3xl flex flex-col justify-between relative group overflow-hidden bg-[#070e0a]"
            >
              <div className="absolute top-4 left-6 text-emerald-500/15 group-hover:text-emerald-500/30 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    {t.badge}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6 font-medium relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Growth Badge */}
              <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{t.partner}</h4>
                  <span className="text-[10px] text-slate-400">{t.sector}</span>
                </div>
                <div className="text-xs font-black text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/25">
                  {t.growth}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
