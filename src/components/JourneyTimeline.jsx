import React from 'react';
import { Compass, Target, Rocket, Award, ArrowLeft } from 'lucide-react';

export default function JourneyTimeline() {
  const steps = [
    {
      num: '01',
      title: 'الفحص والتشخيص التقني الشامل',
      desc: 'قبل إنفاق أي ريال على الإعلانات، نصلح المشاكل التقنية في موقعك وسلات الشراء المتروكة، ونهيئ التتبع الذكي (CAPI/Pixel).',
      icon: Compass,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      num: '02',
      title: 'بناء الاستراتيجية وتحديد الجمهور',
      desc: 'تحليل سلوك العملاء والمنافسين باستخدام الذكاء الاصطناعي لاختيار القنوات الأعلى عائداً (Google, TikTok, Snapchat) وصياغة العروض.',
      icon: Target,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      num: '03',
      title: 'صناعة المحتوى وإطلاق الحملات',
      desc: 'إنتاج تصاميم وفيديوهات إعلانية جذابة تخاطب رغبة العميل وتحفز قرار الشراء الفوري، مع إطلاق حملات البحث والإعلانات الممولة.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      num: '04',
      title: 'التحسين المستمر ومضاعفة الأرباح',
      desc: 'مراقبة يومية للعائد الإعلاني (ROAS)، وإيقاف الإعلانات غير المجدية وتكبير الحملات الرابحة لنصل بعلامتك التجارية إلى القمة.',
      icon: Award,
      color: 'from-purple-500 to-emerald-500'
    }
  ];

  return (
    <section id="journey" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <span>منهجية العمل الواضحة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-cairo text-white mb-4">
            رحلتك مع فيا: من الإقلاع إلى القمة...
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            نبدأ معك من نقطة الانطلاق لرسم المسار، وننقلك بخطى واثقة نحو نتائج ملموسة ونمو حقيقي لنحول رؤيتك إلى إنجاز رقمي متكامل.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="glass-panel p-6 rounded-3xl border border-slate-800 relative group glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {st.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${st.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base font-black font-cairo text-white mb-2.5">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center text-[11px] font-bold text-cyan-400">
                  <span>خطوة معتمدة بالذكاء الاصطناعي</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-black text-cyan-300 hover:text-white bg-slate-900/90 border border-cyan-500/30 px-6 py-3 rounded-2xl shadow-lg hover:border-cyan-400 transition-all"
          >
            <span>هل أنت جاهز لبدء رحلة النمو معنا؟ احجز استشارتك الآن</span>
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}

