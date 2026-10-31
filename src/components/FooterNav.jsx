import React from 'react';
import { ArrowLeft, MessageCircle, Heart } from 'lucide-react';

export default function FooterNav() {
  return (
    <footer className="bg-[#050012] border-t border-[#8551ef]/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#ce23bd]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#8551ef]/15">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="./media/logo.png" 
                alt="VIA AI" 
                className="h-10 w-auto rounded-lg object-contain bg-[#09001f] p-1 border border-[#ce23bd]/30"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-heading font-black text-2xl text-white">
                فيا <span className="text-xs px-2 py-0.5 rounded-full bg-[#ce23bd]/20 text-[#ce23bd] border border-[#ce23bd]/30">AI</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              فيا شركة تسويق رقمي سعودية تدمج الذكاء الاصطناعي في السيو والسوشيال ميديا وإدارة الحملات الإعلانية لتحويل الظهور إلى مبيعات حقيقية وأرباح مستدامة لعلامتك التجارية.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/966569623131"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل عبر الواتساب: 0569623131</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="text-slate-400 hover:text-[#ce23bd] transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-[#ce23bd] transition-colors">خدماتنا المتكاملة</a></li>
              <li><a href="#performance-meter" className="text-slate-400 hover:text-[#ce23bd] transition-colors">أداة مقياس الأداء الشامل</a></li>
              <li><a href="#works" className="text-slate-400 hover:text-[#ce23bd] transition-colors">أعمالنا وقصص النجاح</a></li>
              <li><a href="#journey" className="text-slate-400 hover:text-[#ce23bd] transition-colors">رحلتك مع فيا</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-[#ce23bd] transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">الخدمات التخصصية</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• تحسين محركات البحث وسيو الذكاء الاصطناعي (GEO)</li>
              <li>• إدارة الحملات الإعلانية الممولة (سناب، تيك توك، ميتا، جوجل)</li>
              <li>• حلول وبناء المتاجر الإلكترونية (سلة، زد، شوبيفاي)</li>
              <li>• إدارة حسابات وصناعة محتوى السوشيال ميديا</li>
              <li>• التصميم الجرافيكي والموشن جرافيك السينمائي</li>
              <li>• أتمتة التسويق وروبوتات الدردشة الذكية</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="text-[11px] text-slate-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة فيا للتسويق الرقمي بالذكاء الاصطناعي (VIA AI) بالمملكة العربية السعودية.
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">العودة للأعلى ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
