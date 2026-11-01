import React from 'react';
import { ArrowLeft, MessageCircle, Heart } from 'lucide-react';

export default function FooterNav() {
  return (
    <footer className="bg-[#040605] border-t border-emerald-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Glow in Emerald */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-500/15">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="./media/green-arrow-logo.png" 
                alt="Green Arrow" 
                className="h-11 w-auto rounded-lg object-contain bg-[#050806] p-1 border border-emerald-500/30"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl text-white flex items-center gap-2">
                  GREEN ARROW
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    جرين أرو
                  </span>
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">
                  PERFORMANCE ADS & GROWTH ︽
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              جرين أرو (Green Arrow) - شريكك الاستراتيجي في إعلانات الأداء (Performance Ads) ونمو المبيعات وسيو الذكاء الاصطناعي في المملكة العربية السعودية والخليج العربي.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/966575901487"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:bg-emerald-500 hover:text-black transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب: 0575901487</span>
              </a>

              <a
                href="tel:0575901487"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a140f] border border-emerald-500/30 text-xs font-bold text-slate-200 hover:text-emerald-300 transition-all font-mono"
              >
                <span>اتصال: 0575901487</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="text-slate-400 hover:text-emerald-400 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">خدماتنا المتكاملة</a></li>
              <li><a href="#performance-meter" className="text-slate-400 hover:text-emerald-400 transition-colors">مقياس أداء الحملات</a></li>
              <li><a href="#works" className="text-slate-400 hover:text-emerald-400 transition-colors">أعمالنا وقصص النجاح</a></li>
              <li><a href="#journey" className="text-slate-400 hover:text-emerald-400 transition-colors">رحلتك مع Green Arrow</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-emerald-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">الخدمات التخصصية</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• إعلانات الأداء المتقدمة (Performance Ads)</li>
              <li>• تحسين محركات البحث وسيو الذكاء الاصطناعي (GEO)</li>
              <li>• إدارة الحملات الممولة (سناب، تيك توك، ميتا، جوجل)</li>
              <li>• حلول وبناء المتاجر الإلكترونية (سلة، زد، شوبيفاي)</li>
              <li>• إدارة حسابات وصناعة محتوى السوشيال ميديا</li>
              <li>• التصميم الجرافيكي والموشن جرافيك السينمائي</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="text-[11px] text-slate-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة جرين أرو (Green Arrow - Performance Ads & Growth). مسار مبيعاتك دائماً للأعلى ︽.
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>المملكة العربية السعودية</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Green Arrow Engine</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
