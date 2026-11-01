import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Luminous Neon Green Scroll Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-green-300 shadow-[0_0_12px_rgba(34,197,94,0.85)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="الرجوع للأعلى"
          className="fixed bottom-24 left-6 z-40 p-3 rounded-full bg-[#080d0a]/90 hover:bg-emerald-500 text-emerald-400 hover:text-black border border-emerald-500/40 shadow-[0_10px_25px_rgba(5,8,6,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-110 group"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}

