import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function ConsultationBooking() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('ads');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          phone,
          email,
          service_interest: service,
          project_details: details,
          source_channel: 'website_contact'
        })
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050806]">
      
      {/* Background Glows in Emerald */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] text-emerald-300 text-xs font-bold mb-4">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>ابدأ رحلة النمو اليوم</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            تحدث مع <span className="gradient-text-via">مستشار Green Arrow الآن</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            احجز استشارتك التسويقية المجانية لمناقشة أهدافك وبناء خطة نجاح مخصصة تحقق أعلى عائد استثماري لعلامتك التجارية.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Right Column: Contact Highlights (5 cols) */}
          <div data-reveal="fade-right" style={{ transitionDelay: '100ms' }} className="lg:col-span-5 via-card p-8 rounded-3xl flex flex-col justify-between border border-emerald-500/30 bg-[#070e0a]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                جلسة استراتيجية مجانية 100%
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                خلال الجلسة سنقوم بتحليل متجرك أو موقعك، فحص قنوات إعلاناتك، وتقديم توصيات واضحة ومباشرة لرفع المبيعات وخفض الهدر الإعلاني.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-[#0a140f] flex items-center justify-center text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>الرد والتواصل خلال أقل من ساعتين عمل</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-[#0a140f] flex items-center justify-center text-emerald-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>سرية تامة لبيانات متجرك وأرقامك التسويقية</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-[#0a140f] flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>بدون أي التزام مالي أو شروط مسبقة</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-8 border-t border-emerald-500/15 mt-8 space-y-3">
              <a 
                href="tel:0575901487" 
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a140f] border border-emerald-500/25 hover:border-emerald-400 text-xs font-bold text-slate-200 hover:text-emerald-300 transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">اتصال مباشر (الرقم المعتمد):</div>
                  <div className="font-mono text-sm text-emerald-400 font-bold">0575901487</div>
                </div>
              </a>

              <a 
                href="https://wa.me/966575901487" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a140f] border border-emerald-500/25 hover:border-emerald-400 text-xs font-bold text-slate-200 hover:text-emerald-300 transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center text-emerald-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">محادثة فورية (واتساب):</div>
                  <div className="font-mono text-sm text-emerald-400 font-bold">0575901487</div>
                </div>
              </a>

              <a 
                href="mailto:contact@greenarrow.sa"
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#0a140f] border border-emerald-500/25 hover:border-emerald-400 text-xs font-bold text-slate-200 hover:text-emerald-300 transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 group-hover:bg-emerald-500 group-hover:text-black flex items-center justify-center text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">البريد الإلكتروني المعتمد:</div>
                  <div className="font-mono text-xs text-slate-200">contact@greenarrow.sa</div>
                </div>
              </a>
            </div>

          </div>

          {/* Left Column: Form (7 cols) with Scroll Reveal */}
          <div data-reveal="fade-left" style={{ transitionDelay: '200ms' }} className="lg:col-span-7 via-card p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-[#070e0a]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">تم استلام طلبك بنجاح!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  شكراً لثقتك في Green Arrow. سيقوم أحد خبرائنا التسويقيين بالتواصل معك عبر الواتساب أو الهاتف خلال وقت قصير جداً.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-via-outline px-6 py-2.5 rounded-xl text-xs font-bold text-white mt-4"
                >
                  إرسال استفسار آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-right">
                    <label className="text-xs font-bold text-slate-300">الاسم بالكامل / اسم النشاط: *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: متجر أصايل للعطور"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#050806] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <label className="text-xs font-bold text-slate-300">رقم الجوال (واتساب): *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#050806] border border-emerald-500/30 text-xs text-white placeholder-slate-500 font-mono text-left focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-right">
                    <label className="text-xs font-bold text-slate-300">البريد الإلكتروني:</label>
                    <input
                      type="email"
                      placeholder="info@yourdomain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#050806] border border-emerald-500/30 text-xs text-white placeholder-slate-500 font-mono text-left focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <label className="text-xs font-bold text-slate-300">الخدمة المطلوبة:</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#050806] border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="ads">إدارة الحملات الإعلانية (Performance Ads)</option>
                      <option value="seo">تحسين محركات البحث وسيو الذكاء الاصطناعي</option>
                      <option value="ecommerce">حلول وتطوير المتاجر الإلكترونية</option>
                      <option value="social">إدارة منصات التواصل الاجتماعي</option>
                      <option value="design">التصميم والموشن جرافيك</option>
                      <option value="full">استراتيجية نمو تسويقية متكاملة</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-bold text-slate-300">تفاصيل إضافية عن مشروعك أو التحديات الحالية:</label>
                  <textarea
                    rows={4}
                    placeholder="حدثنا باختصار عن متجرك، ميزانيتك الإعلانية التقريبية، والهدف الذي تود تحقيقه مع Green Arrow..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#050806] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-via-primary w-full py-4 rounded-xl text-xs sm:text-sm font-black text-black flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'جاري إرسال الطلب...' : 'احجز استشارتك المجانية الآن'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
