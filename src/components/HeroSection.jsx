import React from 'react';
import { Sparkles, ArrowLeft, Bot, ShieldCheck, Zap, TrendingUp, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Radial Glows in Green Arrow Emerald & Mint */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/20 via-green-500/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (Text in RTL) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-emerald-300">
                ︽ مسار مبيعاتك دائماً للأعلى ︽ | Performance Ads & Growth
              </span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Main Authentic Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.25] tracking-tight">
              جرين أرو <span className="text-emerald-400 font-sans tracking-normal">GREEN ARROW</span>{' '}
              <span className="gradient-text-via block mt-1.5">
                نمو استراتيجي للمبيعات وإعلانات الأداء
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              في <strong className="text-white font-bold">جرين أرو (Green Arrow)</strong> نقود حملاتك الإعلانية نحو تحقيق أعلى عائد استثماري (ROAS) عبر أحدث خوارزميات الاستهداف الدقيق وسيو الذكاء الاصطناعي وبناء مسارات تحويل تضمن تدفق المبيعات المستدام.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="btn-via-primary w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-black text-black flex items-center justify-center gap-3 group"
              >
                <span>احجز استشارتك المجانية</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#performance-meter"
                className="btn-via-outline w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2.5"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>أداة فحص وهدر الميزانيات الإعلانية</span>
              </a>
            </div>

            {/* Stats Proof Grid */}
            <div className="pt-8 grid grid-cols-3 gap-3 border-t border-emerald-500/20 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-black gradient-text-gold font-mono">+114%</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">نمو متوسط المبيعات</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3.8x</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">معدل العائد (ROAS)</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono">-35%</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">خفض الهدر الإعلاني</div>
              </div>
            </div>

          </div>

          {/* Left Column: The Authentic 3D Robot Avatar with Emerald Aura */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Halo Aura behind the Robot in Emerald & Green */}
            <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-emerald-500/30 to-green-500/25 blur-3xl animate-pulse" />
            <div className="absolute w-[280px] h-[280px] rounded-full border-2 border-emerald-500/30 animate-spin [animation-duration:25s] border-dashed" />
            <div className="absolute w-[340px] h-[340px] rounded-full border border-emerald-400/20 animate-spin [animation-duration:40s]" />

            {/* Authentic 3D Robot Image with Floating Animation */}
            <div className="relative z-10 max-w-[380px] sm:max-w-[460px] w-full flex justify-center">
              <img
                src="./media/Robot.webp"
                alt="Green Arrow AI Engine"
                className="robo-avatar w-full h-auto max-h-[580px] object-contain select-none pointer-events-none"
              />

              {/* Floating Interactive Badges around the Avatar */}
              <div className="badge-float absolute -top-4 right-0 sm:-right-4 px-4 py-2 rounded-2xl bg-[#0a140f]/95 border border-emerald-500/50 backdrop-blur-xl shadow-[0_10px_25px_rgba(34,197,94,0.3)] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">محرك إعلانات الأداء</div>
                  <div className="text-xs font-black text-white">Green Arrow AI v4.2</div>
                </div>
              </div>

              <div className="badge-float absolute bottom-8 -left-2 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#0a140f]/95 border border-emerald-500/50 backdrop-blur-xl shadow-[0_10px_25px_rgba(34,197,94,0.3)] flex items-center gap-3 [animation-delay:1.5s]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/25 flex items-center justify-center text-emerald-300">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">تحليل ميزانيات فوري</div>
                  <div className="text-xs font-black text-emerald-400 font-mono">+114% نمو متوقع</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
