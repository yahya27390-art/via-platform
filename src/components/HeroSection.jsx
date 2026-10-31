import React from 'react';
import { Sparkles, ArrowLeft, TrendingUp, ShieldCheck, Cpu, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Neon Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-6 shadow-lg shadow-cyan-500/10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>وكالة تسويق رقمي بالذكاء الاصطناعي في المملكة العربية السعودية 🇸🇦</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-cairo text-white tracking-tight leading-[1.25] sm:leading-[1.2] max-w-4xl mx-auto mb-6">
          نحوّل ظهورك الرقمي إلى <span className="gradient-text">مبيعات حقيقية</span> وأرباح مستدامة
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          في عصر البحث بالذكاء الاصطناعي، نصلح المشاكل التقنية في متجرك قبل إطلاق أي حملة، ونبني استراتيجيات متكاملة للظهور في Google وChatGPT وتيك توك لتحقيق أعلى عائد على استثمارك الإعلاني.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href="#performance-meter"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>قس أداء مشروعك مجاناً (أداة الذكاء الاصطناعي)</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
          >
            <span>احجز استشارة مجانية</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Metric Proof Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 text-right flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black font-cairo text-white">+340%</div>
              <div className="text-[11px] text-slate-400">متوسط نمو مبيعات عملائنا</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 text-right flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black font-cairo text-white">GEO & SEO</div>
              <div className="text-[11px] text-slate-400">ظهور في Google وChatGPT</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 text-right flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black font-cairo text-white">0% هدر</div>
              <div className="text-[11px] text-slate-400">إصلاح المشاكل التقنية أولاً</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 text-right flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black font-cairo text-white">دعم مستمر</div>
              <div className="text-[11px] text-slate-400">جلسات استشارية وتقارير شفافة</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

