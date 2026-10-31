import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageCircle, Menu, X, ArrowLeft } from 'lucide-react';

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'مقياس الأداء الذكي', href: '#performance-meter' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'رحلتك معنا', href: '#journey' },
    { name: 'قصص النجاح', href: '#case-studies' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=966569623131&text=السلام%20عليكم،%20أرغب%20في%20استشارة%20تسويقية%20مع%20فيا%20(VIA%20AI)&type=phone_number&app_absent=0";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-cyan-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all">
              <Sparkles className="w-5 h-5 text-white animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black font-cairo tracking-wide text-white flex items-center gap-1.5">
                فيا <span className="text-xs px-1.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono">VIA AI</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium -mt-0.5">التسويق الرقمي بالذكاء الاصطناعي</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-2 rounded-xl border border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب مباشر</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-200 hover:from-cyan-300 hover:to-white px-4 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>احجز استشارتك المجانية</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 py-3 rounded-xl border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل واتساب مع مختص</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-black text-slate-950 bg-cyan-400 py-3 rounded-xl"
            >
              <span>احجز استشارتك المجانية</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

