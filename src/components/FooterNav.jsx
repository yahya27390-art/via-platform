import React from 'react';
import { Sparkles, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function FooterNav() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-right">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-black font-cairo text-white">
                فيا <span className="text-xs text-cyan-400 font-mono">VIA AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              شركة تسويق رقمي سعودية تدمج الذكاء الاصطناعي في السيو والسوشيال ميديا والإعلانات الممولة لتحويل الظهور إلى مبيعات حقيقية.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              المملكة العربية السعودية 🇸🇦
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white font-cairo mb-4 border-b border-slate-900 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">الرئيسية</a></li>
              <li><a href="#performance-meter" className="hover:text-cyan-400 transition-colors">مقياس الأداء الشامل</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">خدماتنا الإلكترونية</a></li>
              <li><a href="#journey" className="hover:text-cyan-400 transition-colors">رحلتك مع فيا</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">قصص النجاح والأرقام</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold text-white font-cairo mb-4 border-b border-slate-900 pb-2">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">سيو ومحركات الذكاء الاصطناعي (GEO)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">إدارة حسابات السوشيال ميديا</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">إعلانات المتاجر وسلات الشراء</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">حملات المؤثرين وصناع المحتوى</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">الهوية البصرية والتصميم الإبداعي</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">الموشن جرافيك والفيديو</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold text-white font-cairo mb-4 border-b border-slate-900 pb-2">
              التواصل والدعم
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://api.whatsapp.com/send/?phone=966569623131" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-mono text-[11px]">
                  +966 56 962 3131 (واتساب)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-mono text-[11px]">+966 11 507 8066</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="font-mono text-[11px]">contact@via-ai.co</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} فيا للتسويق الرقمي (VIA AI) - منصة مستقلة بالكامل.
          </div>
          <div className="flex items-center gap-4">
            <span>الامتثال لمعايير الخصوصية السعودية</span>
            <span>•</span>
            <span>نظام بيانات مستقل</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

