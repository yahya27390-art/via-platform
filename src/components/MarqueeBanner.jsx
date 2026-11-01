import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const PARTNERS = [
  { name: 'Meta Business Partner', tag: 'إعلانات فيسبوك وانستقرام' },
  { name: 'Google Ads Premier', tag: 'بحث ويوتيوب وشبكة إعلانات' },
  { name: 'TikTok Ads Partner', tag: 'إعلانات الفيديو السريع' },
  { name: 'Snapchat Ads Certified', tag: 'استهداف الجمهور السعودي' },
  { name: 'Salla Partner', tag: 'حلول ومتاجر سلة' },
  { name: 'Zid Partner', tag: 'حلول ومتاجر زد' },
];

export default function MarqueeBanner() {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-[#070e0a]/85 border-y border-emerald-500/20">
      
      {/* Top Channel Pills Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] text-slate-300">
          <span className="text-emerald-400 font-bold flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>قنوات إعلانية موثوقة ومعتمدة:</span>
          </span>
          {PARTNERS.map((p, i) => (
            <span 
              key={i} 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a140f] border border-emerald-500/20 hover:border-emerald-400/50 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <strong className="text-white font-medium">{p.name}</strong>
              <span className="hidden md:inline text-slate-500 text-[10px]">({p.tag})</span>
            </span>
          ))}
        </div>
      </div>

      {/* Left/Right Gradient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#050806] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#050806] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max marquee-track items-center">
        <img
          src="./media/Scroll.webp"
          alt="Green Arrow Performance Results and Partners Banner"
          className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="./media/Scroll.webp"
          alt="Green Arrow Performance Results and Partners Banner"
          className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
