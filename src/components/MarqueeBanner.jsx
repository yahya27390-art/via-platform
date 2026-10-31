import React from 'react';

export default function MarqueeBanner() {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-[#0c003a]/70 border-y border-[#8551ef]/20">
      
      {/* Left/Right Gradient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#09001f] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#09001f] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max marquee-track items-center">
        <img
          src="./media/Scroll.webp"
          alt="VIA AI Results and Partners Banner"
          className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="./media/Scroll.webp"
          alt="VIA AI Results and Partners Banner"
          className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
