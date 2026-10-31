import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=966569623131&text=مرحباً%20فيا%20(VIA%20AI)،%20أرغب%20في%20استشارة%20تسويقية%20سريعة%20لمشروعي.&type=phone_number&app_absent=0";

  return (
    <aside aria-label="محادثة واتساب" className="fixed bottom-6 left-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300"
        title="تحدث مع خبير فيا على الواتساب"
      >
        {/* Pulsing Aura */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-slate-950" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          تحدث مباشرة مع خبير تسويقي ⚡
        </span>
      </a>
    </aside>
  );
}

