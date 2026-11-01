import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = "0575901487";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=966575901487&text=${encodeURIComponent("مرحباً Green Arrow (جرين أرو)، أود الاستفسار عن خدمات نمو المبيعات وإعلانات الأداء لمشروعي.")}&type=phone_number&app_absent=0`;

  return (
    <aside aria-label="محادثة واتساب سريعة" className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 text-black shadow-[0_10px_28px_rgba(34,197,94,0.45)] hover:scale-110 active:scale-95 transition-all duration-300"
        title="تحدث مع مستشار Green Arrow عبر الواتساب"
      >
        {/* Pulsing Aura */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none" />

        {/* Live Online Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#050806]" />
        </span>

        <MessageCircle className="w-7 h-7 text-black stroke-[2.2]" />

        {/* Rich Tooltip on Hover */}
        <span className="absolute left-16 px-3.5 py-2 rounded-2xl bg-[#080d0a]/95 border border-emerald-500/50 text-slate-100 text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-2xl backdrop-blur-xl flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>تواصل واتساب مباشر:</span>
          <span className="text-emerald-400 font-mono text-xs">{phoneNumber}</span>
        </span>
      </a>
    </aside>
  );
}
