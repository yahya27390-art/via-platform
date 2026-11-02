import React from 'react';
import { Sparkles, ArrowLeft, Zap, PhoneCall, MessageCircle } from 'lucide-react';
import GreenArrowHeroAvatar from './GreenArrowHeroAvatar';

export default function HeroSection() {
  const phoneNumber = "0575901487";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=966575901487&text=${encodeURIComponent("مرحباً Green Arrow، أرغب في استشارة تسويقية مباشرة لمشروعي.")}&type=phone_number&app_absent=0`;

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Subtle, Focused Center Spotlight (No Swampy Green Wash) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Text & Strategic Content */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Top Brand Eyebrow Pill */}
            <div 
              data-reveal="fade-down"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.12)] backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-emerald-300 tracking-wide font-sans">
                GREEN ARROW · مسار مبيعاتك دائماً للأعلى ︽
              </span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Main Balanced Headline (Authoritative 2-Line Structure) */}
            <h1 
              data-reveal="fade-up"
              style={{ transitionDelay: '100ms' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span>السهم الأخضر</span>
                <span className="font-sans text-emerald-400 font-extrabold tracking-wider text-[0.75em] px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 inline-block">
                  GREEN ARROW
                </span>
              </div>
              <span className="block mt-2.5 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
                نمو استراتيجي للمبيعات وإعلانات الأداء
              </span>
            </h1>

            {/* Sub-heading */}
            <p 
              data-reveal="fade-up"
              style={{ transitionDelay: '200ms' }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              في <strong className="text-white font-bold">السهم الأخضر (Green Arrow)</strong> نقود حملاتك الإعلانية نحو تحقيق أعلى عائد استثماري (ROAS) عبر أحدث خوارزميات الاستهداف الدقيق وسيو الذكاء الاصطناعي وبناء مسارات تحويل تضمن تدفق المبيعات المستدام.
            </p>

            {/* Direct Official Contact Pill */}
            <div 
              data-reveal="fade-up" 
              style={{ transitionDelay: '250ms' }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 p-1.5 px-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                الرقم المعتمد لشركة السهم الأخضر:
              </span>
              <a 
                href={`tel:${phoneNumber}`}
                className="px-3 py-1 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-black font-mono font-bold text-xs flex items-center gap-1.5 transition-all"
                title="اتصال هاتف"
              >
                <PhoneCall className="w-3 h-3 text-emerald-400" />
                <span>{phoneNumber}</span>
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-black font-bold text-xs flex items-center gap-1.5 transition-all"
                title="محادثة واتساب"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>واتساب مباشر</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '300ms' }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <a
                href="#contact"
                className="btn-via-primary w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-black text-black flex items-center justify-center gap-3 group active:scale-95 transition-all shadow-lg"
              >
                <span>احجز استشارتك المجانية</span>
                <span className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </span>
              </a>

              <a
                href="#performance-meter"
                className="btn-via-outline w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2.5 active:scale-95 transition-all"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>أداة فحص وهدر الميزانيات الإعلانية</span>
              </a>
            </div>

            {/* Stats Proof Dock: Unified Obsidian Glass Bar */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '400ms' }}
              className="pt-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="grid grid-cols-3 divide-x divide-x-reverse divide-white/10 rounded-2xl bg-white/[0.03] border border-white/10 p-4 backdrop-blur-md">
                <div className="text-center px-2">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono [font-variant-numeric:tabular-nums]">+114%</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">نمو متوسط المبيعات</div>
                </div>

                <div className="text-center px-2">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono [font-variant-numeric:tabular-nums]">3.8x</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">معدل العائد (ROAS)</div>
                </div>

                <div className="text-center px-2">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono [font-variant-numeric:tabular-nums]">35%-</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">خفض الهدر الإعلاني</div>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: 100% Borderless 3D Mascot */}
          <div 
            data-reveal="zoom-in"
            style={{ transitionDelay: '200ms' }}
            className="lg:col-span-5 relative"
          >
            <GreenArrowHeroAvatar />
          </div>

        </div>
      </div>
    </section>
  );
}
