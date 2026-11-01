import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';

// Platform items with vector icons & metrics
const MARQUEE_ITEMS = [
  {
    type: 'partner',
    name: 'Meta Business Partner',
    sub: 'إعلانات فيسبوك وانستقرام',
    accent: '#0668E1',
    badge: 'معتمد',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#0081FB"/>
      </svg>
    )
  },
  {
    type: 'metric',
    name: '+142% نمو المبيعات',
    sub: 'إعلانات الأداء الممولة',
    accent: '#22c55e',
    badge: 'موثق ︽',
    icon: <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
  },
  {
    type: 'partner',
    name: 'Google Ads Premier',
    sub: 'بحث، يوتيوب، وشبكة إعلانات',
    accent: '#4285F4',
    badge: 'معتمد',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    )
  },
  {
    type: 'metric',
    name: '4.8x معدل العائد (ROAS)',
    sub: 'موسم الرياض ومبيعات الشتاء',
    accent: '#10b981',
    badge: 'Green Arrow',
    icon: <Award className="w-5 h-5 text-emerald-400 shrink-0" />
  },
  {
    type: 'partner',
    name: 'TikTok for Business',
    sub: 'إعلانات الفيديو السريع والمحتوى الفيروسي',
    accent: '#00F2FE',
    badge: 'معتمد',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.89.14V9.43a6.35 6.35 0 0 0-.89-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 5.09 1.76V7.36a4.84 4.84 0 0 1-1.33-.67z" fill="#00f2fe"/>
      </svg>
    )
  },
  {
    type: 'metric',
    name: '-38% خفض تكلفة الاقتناء',
    sub: 'CPA محسّن خوارزمياً',
    accent: '#22c55e',
    badge: 'استهداف دقيق',
    icon: <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
  },
  {
    type: 'partner',
    name: 'Snapchat Marketing Partner',
    sub: 'الاستهداف الأول للجمهور السعودي',
    accent: '#FFFC00',
    badge: 'معتمد',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#FFFC00">
        <path d="M12.002 2C8.42 2 6.002 4.15 6.002 7.5c0 1.63.59 3.02 1.34 3.96.12.15.17.33.13.51-.12.56-.91 1.25-1.92 1.54-.3.09-.55.33-.55.65 0 .42.36.75.8.72 1.35-.1 2.45-.63 2.92-1.04.14-.12.33-.14.49-.07.82.35 1.75.54 2.79.54 1.04 0 1.96-.19 2.78-.54.16-.07.35-.05.49.07.47.41 1.57.94 2.92 1.04.44.03.8-.3.8-.72 0-.32-.25-.56-.55-.65-1.01-.29-1.8-0.98-1.92-1.54-.04-.18.01-.36.13-.51.75-.94 1.34-2.33 1.34-3.96 0-3.35-2.42-5.5-6.002-5.5z"/>
      </svg>
    )
  },
  {
    type: 'partner',
    name: 'منصة سلة (Salla Partner)',
    sub: 'حلول وتطوير وربط المتاجر الإلكترونية',
    accent: '#004D5A',
    badge: 'متاجر السعودية',
    icon: (
      <div className="w-5 h-5 rounded-md bg-[#004D5A] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
        سلة
      </div>
    )
  },
  {
    type: 'partner',
    name: 'منصة زد (Zid Partner)',
    sub: 'تمكين التجارة الحديثة والربط البيعي',
    accent: '#6C47FF',
    badge: 'متاجر التجزئة',
    icon: (
      <div className="w-5 h-5 rounded-md bg-[#6C47FF] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
        زد
      </div>
    )
  },
  {
    type: 'metric',
    name: 'سيو الذكاء الاصطناعي (GEO)',
    sub: 'توصيات ChatGPT و Gemini',
    accent: '#10b981',
    badge: 'Green Arrow',
    icon: <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
  }
];

export default function MarqueeBanner() {
  return (
    <section className="relative w-full py-6 overflow-hidden bg-[#060b08] border-y border-emerald-500/20 select-none">
      
      {/* Subtle Top Label */}
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-300">شركاء النجاح ومنصات الإعلانات المعتمدة</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-normal">نتائج أداء موثقة ومباشرة</span>
        </div>
      </div>

      {/* Left and Right Smooth Fading Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#050806] via-[#050806]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#050806] via-[#050806]/90 to-transparent z-10 pointer-events-none" />

      {/* Infinite Seamless Scrolling Track (Duplicated twice for continuous loop) */}
      <div className="flex w-max marquee-track items-center gap-4 py-1">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#080d0a]/90 hover:bg-[#0c1610] border border-emerald-500/20 hover:border-emerald-400/50 shadow-[0_4px_20px_rgba(5,8,6,0.6)] backdrop-blur-xl transition-all duration-300 group shrink-0"
          >
            {/* Icon */}
            <div className="w-9 h-9 rounded-xl bg-[#0b1610] border border-emerald-500/25 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-300 shadow-inner">
              {item.icon}
            </div>

            {/* Content */}
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {item.badge}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
