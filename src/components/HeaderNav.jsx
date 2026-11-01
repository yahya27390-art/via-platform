import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle, ArrowLeft } from 'lucide-react';

export default function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مقياس الأداء', href: '#performance-meter' },
    { name: 'أعمالنا', href: '#works' },
    { name: 'رحلتك مع Green Arrow', href: '#journey' },
    { name: 'قصص النجاح', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050806]/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_30px_rgba(5,8,6,0.9)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300" />
              <img 
                src="./media/green-arrow-logo.png" 
                alt="Green Arrow" 
                className="relative h-11 w-auto rounded-lg object-contain bg-[#050806] p-1 border border-emerald-500/30"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-11 w-11 rounded-lg bg-gradient-to-tr from-emerald-600 to-green-400 items-center justify-center font-black text-black text-xl">
                GA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                GREEN ARROW
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                  جرين أرو
                </span>
              </span>
              <span className="text-[10px] text-emerald-400/90 font-medium tracking-wider">
                PERFORMANCE ADS & GROWTH ︽
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-[#080d0a]/85 border border-emerald-500/20 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-emerald-500/15 hover:border-emerald-500/30 border border-transparent transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-via-primary px-5 py-2.5 rounded-full text-xs font-bold text-black flex items-center gap-2 group font-tajawal"
            >
              <span>احجز استشارتك المجانية</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="btn-via-primary px-3 py-1.5 rounded-full text-[11px] font-bold text-black"
            >
              استشارة
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#080d0a] border border-emerald-500/30 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050806]/98 border-b border-emerald-500/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-emerald-500/15 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-via-primary w-full py-3 rounded-xl text-xs font-bold text-black text-center"
            >
              احجز استشارتك المجانية الآن
            </a>
            <a
              href="https://wa.me/966569623131"
              target="_blank"
              rel="noreferrer"
              className="btn-via-outline w-full py-3 rounded-xl text-xs font-bold text-slate-200 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>تواصل واتساب مباشر</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
