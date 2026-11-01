import React from 'react';
import { Sparkles, ArrowLeft, Bot, ShieldCheck, Zap, TrendingUp, BarChart3, PhoneCall, MessageCircle } from 'lucide-react';
import GreenArrowHeroAvatar from './GreenArrowHeroAvatar';

export default function HeroSection() {
  const phoneNumber = "0575901487";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=966575901487&text=${encodeURIComponent("مرحباً Green Arrow، أرغب في استشارة تسويقية مباشرة لمشروعي.")}&type=phone_number&app_absent=0`;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Radial Glows in Green Arrow Emerald & Mint */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-gradient-to-tr from-emerald-500/20 via-green-500/18 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-emerald-600/12 rounded-full blur-[160px] pointer-events-none" />

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

            {/* Main Authentic Heading with Balance */}
            <h1 
              data-reveal="fade-up"
              style={{ transitionDelay: '100ms' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.25] tracking-tight [text-wrap:balance]"
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
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal [text-wrap:pretty]"
            >
              في <strong className="text-white font-bold">جرين أرو (Green Arrow)</strong> نقود حملاتك الإعلانية نحو تحقيق أعلى عائد استثماري (ROAS) عبر أحدث خوارزميات الاستهداف الدقيق وسيو الذكاء الاصطناعي وبناء مسارات تحويل تضمن تدفق المبيعات المستدام.
            </p>

            {/* Direct Official Contact Pill */}
            <div 
              data-reveal="fade-up" 
              style={{ transitionDelay: '250ms' }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 p-1.5 px-3 rounded-2xl bg-[#080d0a]/80 border border-emerald-500/25"
            >
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                الرقم المعتمد لشركة جرين أرو:
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
                className="btn-via-primary w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-black text-black flex items-center justify-center gap-3 group active:scale-95 transition-all"
              >
                <span>احجز استشارتك المجانية</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#performance-meter"
                className="btn-via-outline w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2.5 active:scale-95 transition-all"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>أداة فحص وهدر الميزانيات الإعلانية</span>
              </a>
            </div>

            {/* Stats Proof Grid with Staggered Fade Up & Tabular Numbers */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '400ms' }}
              className="pt-8 grid grid-cols-3 gap-3 border-t border-emerald-500/20 max-w-lg mx-auto lg:mx-0"
            >
              <div className="p-3.5 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center hover:border-emerald-500/50 hover:bg-[#0a120d] transition-all">
                <div className="text-2xl sm:text-3xl font-black gradient-text-gold font-mono [font-variant-numeric:tabular-nums]">+114%</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">نمو متوسط المبيعات</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center hover:border-emerald-500/50 hover:bg-[#0a120d] transition-all">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono [font-variant-numeric:tabular-nums]">3.8x</div>
                <div className="text-[11px] text-slate-400 font-bold mt-1">معدل العائد (ROAS)</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#080d0a]/70 border border-emerald-500/20 text-center hover:border-emerald-500/50 hover:bg-[#0a120d] transition-all">
                <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono [font-variant-numeric:tabular-nums]">-35%</div>
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
