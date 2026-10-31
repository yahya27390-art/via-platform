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
    { name: 'رحلتك مع فيا', href: '#journey' },
    { name: 'قصص النجاح', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#09001f]/85 backdrop-blur-xl border-b border-[#8551ef]/20 shadow-[0_10px_30px_rgba(9,0,31,0.8)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ce23bd] to-[#8551ef] rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
              <img 
                src="./media/logo.png" 
                alt="VIA AI" 
                className="relative h-10 w-auto rounded-lg object-contain bg-[#09001f] p-1 border border-[#ce23bd]/30"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 w-10 rounded-lg bg-gradient-to-tr from-[#ce23bd] to-[#8551ef] items-center justify-center font-black text-white text-lg">
                V
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-[#ce23bd] transition-colors">
                فيا <span className="text-xs px-2 py-0.5 rounded-full bg-[#ce23bd]/20 text-[#ce23bd] border border-[#ce23bd]/30">AI</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">تسويق رقمي بالذكاء الاصطناعي</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-[#10072b]/80 border border-[#8551ef]/20 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-[#ce23bd]/15 hover:border-[#ce23bd]/30 border border-transparent transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-via-primary px-5 py-2.5 rounded-full text-xs font-bold text-white flex items-center gap-2 group"
            >
              <span>احجز استشارتك المجانية</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="btn-via-primary px-3 py-1.5 rounded-full text-[11px] font-bold text-white"
            >
              استشارة
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#10072b] border border-[#8551ef]/30 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0c003a]/95 backdrop-blur-2xl border-b border-[#8551ef]/30">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:bg-[#ce23bd]/15 hover:text-[#ce23bd] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#8551ef]/20 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-via-primary w-full py-3 rounded-xl text-center text-xs font-bold text-white"
              >
                احجز استشارتك المجانية
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
