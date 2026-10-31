import React from 'react';
import { Rocket, Target, Cpu, Crown, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'نقطة الانطلاق ورسم المسار',
    desc: 'نبدأ بجلسة تشخيص معمقة وفهم نموذج عملك وتحليل السوق والمنافسين بالذكاء الاصطناعي لاكتشاف فرص الربح المهدرة.',
    icon: Rocket,
    color: 'text-[#ce23bd]'
  },
  {
    step: '02',
    title: 'بناء الاستراتيجية الذكية',
    desc: 'نضع خارطة طريق مخصصة تجمع بين المحتوى الإبداعي، الاستهداف الخوارزمي الدقيق، وسيو محركات البحث والـ AI.',
    icon: Target,
    color: 'text-[#8551ef]'
  },
  {
    step: '03',
    title: 'التنفيذ والتحسين الخوارزمي',
    desc: 'إطلاق الحملات وإدارة المنصات مع مراقبة وتحسين لحظي للنتائج لضمان توجيه كل ريال نحو الجمهور الأكثر استعداداً للشراء.',
    icon: Cpu,
    color: 'text-cyan-400'
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
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      
      {/* Background Nebula */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-[#8551ef]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160a38] border border-[#ce23bd]/40 shadow-[0_0_20px_rgba(206,35,189,0.25)] text-[#ce23bd] text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>رحلتك مع فيا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            من الإقلاع إلى <span className="gradient-text-via">القمة...</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            نبدأ معك من نقطة الانطلاق، لرسم المسار، وننقلك بخطى واثقة نحو نتائج ملموسة ونمو حقيقي لنحول رؤيتك إلى إنجاز رقمي متكامل حتى تعانق علامتك القمة.
          </p>
        </div>

        {/* Content Layout: 4 Steps on Right + Second 3D Robot on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Steps Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="via-card p-6 rounded-3xl flex items-start gap-5 relative group overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#160a38] border border-[#8551ef]/30 flex items-center justify-center shrink-0 shadow-[0_5px_15px_rgba(9,0,31,0.6)] group-hover:scale-110 transition-transform">
                    <Icon className={`w-7 h-7 ${s.color}`} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-[#ce23bd]/15 text-[#ce23bd]">
                        المرحلة {s.step}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#ce23bd] transition-colors">
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

            <div className="pt-4 text-center sm:text-right">
              <a
                href="#contact"
                className="btn-via-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-black text-white"
              >
                <span>ابدأ رحلتك التسويقية الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Left Column: Authentic Second Robot (Robot-1.webp) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Rings behind Robot 2 */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-[#8551ef]/30 via-[#ce23bd]/20 to-transparent blur-3xl animate-pulse" />
            
            <div className="relative z-10 max-w-[400px] w-full flex justify-center">
              <img
                src="./media/Robot-1.webp"
                alt="VIA AI Robot Guide"
                className="robo-avatar-secondary w-full h-auto max-h-[500px] object-contain select-none pointer-events-none"
              />

              {/* Floating Badge */}
              <div className="badge-float absolute bottom-6 right-2 px-4 py-2 rounded-2xl bg-[#120738]/95 border border-[#ce23bd]/50 backdrop-blur-xl shadow-[0_10px_25px_rgba(206,35,189,0.3)]">
                <div className="text-[10px] text-slate-400">مرافقة مستمرة</div>
                <div className="text-xs font-black text-white">من البداية حتى القمة ⚡</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
