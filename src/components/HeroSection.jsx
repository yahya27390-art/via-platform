import React from 'react';
import { Sparkles, ArrowLeft, Bot, ShieldCheck, Zap, TrendingUp, BarChart3 } from 'lucide-react';
import GreenArrowHeroAvatar from './GreenArrowHeroAvatar';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Radial Glows in Green Arrow Emerald & Mint */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/20 via-green-500/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (Text in RTL with Scroll Reveal) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Top Badge */}
            <div 
              data-reveal="fade-down"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-emerald-300">
                ︽ مسار مبيعاتك دائماً للأعلى ︽ | Performance Ads & Growth
              </span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Main Authentic Heading */}
            <h1 
              data-reveal="fade-up"
              style={{ transitionDelay: '100ms' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.25] tracking-tight"
            >
              جرين أرو <span className="text-emerald-400 font-sans tracking-normal">GREEN ARROW</span>{' '}
              <span className="gradient-text-via block mt-1.5">
                نمو استراتيجي للمبيعات وإعلانات الأداء
              </span>
            </h1>

            {/* Sub-heading */}
            <p 
              data-reveal="fade-up"
              style={{ transitionDelay: '200ms' }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              في <strong className="text-white font-bold">جرين أرو (Green Arrow)</strong> نقود حملاتك الإعلانية نحو تحقيق أعلى عائد استثماري (ROAS) عبر أحدث خوارزميات الاستهداف الدقيق وسيو الذكاء الاصطناعي وبناء مسارات تحويل تضمن تدفق المبيعات المستدام.
            </p>

            {/* Action Buttons */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '300ms' }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
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

            {/* Stats Proof Grid with Staggered Fade Up */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '400ms' }}
              className="pt-8 grid grid-cols-3 gap-3 border-t border-emerald-500/20 max-w-lg mx-auto lg:mx-0"
            >
              <div className="p-3 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center hover:border-emerald-500/50 transition-colors">
                <div className="text-2xl sm:text-3xl font-black gradient-text-gold font-mono">+114%</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">نمو متوسط المبيعات</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center hover:border-emerald-500/50 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3.8x</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">معدل العائد (ROAS)</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center hover:border-emerald-500/50 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono">-35%</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">خفض الهدر الإعلاني</div>
              </div>
            </div>

          </div>

          {/* Left Column: Interactive 3D Green Arrow Cyber Avatar */}
          <div 
            data-reveal="zoom-in"
            style={{ transitionDelay: '250ms' }}
            className="lg:col-span-5"
          >
            <GreenArrowHeroAvatar />
          </div>

        </div>
      </div>
    </section>
  );
}
