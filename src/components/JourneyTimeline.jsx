import React, { useState } from 'react';
import { Rocket, Target, Cpu, Crown, ArrowLeft, Sparkles, CheckCircle2, Compass, Award } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'نقطة الانطلاق ورسم المسار',
    desc: 'نبدأ بجلسة تشخيص معمقة وفهم نموذج عملك وتحليل السوق والمنافسين بالذكاء الاصطناعي لاكتشاف فرص الربح المهدرة.',
    icon: Rocket,
    color: 'text-emerald-400'
  },
  {
    step: '02',
    title: 'بناء الاستراتيجية الذكية (Performance Strategy)',
    desc: 'نضع خارطة طريق مخصصة تجمع بين المحتوى الإبداعي عالي التحويل، الاستهداف الخوارزمي الدقيق، وسيو محركات البحث والـ AI.',
    icon: Target,
    color: 'text-green-400'
  },
  {
    step: '03',
    title: 'التنفيذ والتحسين الخوارزمي اللحظي',
    desc: 'إطلاق الحملات وإدارة المنصات مع مراقبة وتحسين لحظي للنتائج لضمان توجيه كل ريال نحو الجمهور الأكثر استعداداً للشراء.',
    icon: Cpu,
    color: 'text-teal-400'
  },
  {
    step: '04',
    title: 'معانقة القمة والنمو المستدام',
    desc: 'تحقيق مبيعات متضاعفة ومعدل عائد قياسي (ROAS) وبناء حضور رقمي قوي يجعل علامتك التجارية الخيار الأول دائماً.',
    icon: Crown,
    color: 'text-amber-400'
  }
];

export default function JourneyTimeline() {
  const [guideHover, setGuideHover] = useState(false);

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      
      {/* Background Emerald Nebula */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] text-emerald-300 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>رحلتك مع Green Arrow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            مسار مبيعاتك <span className="gradient-text-via">دائماً للأعلى ︽</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            نبدأ معك من نقطة الانطلاق، لرسم المسار، وننقلك بخطى واثقة نحو نتائج ملموسة ونمو حقيقي لنحول رؤيتك إلى إنجاز رقمي متكامل حتى تعانق علامتك القمة.
          </p>
        </div>

        {/* Content Layout: 4 Steps on Right + Brand New Guide 3D Robot on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Steps Column (7 cols) with Staggered Scroll Reveal */}
          <div className="lg:col-span-7 space-y-5 relative">
            
            {/* Connecting Luminous Vertical Line */}
            <div className="hidden sm:block absolute right-[35px] top-8 bottom-16 w-[2px] bg-gradient-to-b from-emerald-500 via-green-400 to-emerald-700 opacity-30 pointer-events-none" />

            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  data-reveal="fade-up"
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className="via-card p-6 rounded-3xl flex items-start gap-5 relative group overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#09120c] border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-[0_5px_15px_rgba(5,8,6,0.6)] group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300 z-10">
                    <Icon className={`w-7 h-7 ${s.color}`} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                        المرحلة {s.step}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div data-reveal="fade-up" style={{ transitionDelay: '480ms' }} className="pt-4 text-center sm:text-right">
              <a
                href="#contact"
                className="btn-via-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-black text-black"
              >
                <span>ابدأ رحلتك التسويقية مع Green Arrow</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Left Column: Brand New 3D Green Arrow Guide Mascot with Interactive Animation */}
          <div 
            data-reveal="zoom-in"
            style={{ transitionDelay: '200ms' }}
            className="lg:col-span-5 relative flex items-center justify-center select-none"
            onMouseEnter={() => setGuideHover(true)}
            onMouseLeave={() => setGuideHover(false)}
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-[360px] w-full flex flex-col items-center">
              {/* 100% Free-Floating Borderless Guide Mascot */}
              <div className="relative w-full flex items-center justify-center group">
                <img
                  src="./media/green-arrow-avatar-guide-transparent.png"
                  alt="Green Arrow Growth Guide Mascot"
                  className="robo-avatar-secondary w-full h-auto max-h-[460px] object-contain select-none transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = './media/Robot-1.webp';
                  }}
                />
              </div>

              {/* Realistic Soft Floor Contact Shadow */}
              <div className="w-44 h-3 rounded-full bg-black/70 blur-sm mx-auto mt-1" />
              <div className="w-52 h-2 rounded-full bg-emerald-400/15 blur-md mx-auto -mt-1" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
