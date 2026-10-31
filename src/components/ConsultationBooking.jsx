import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, Calendar, FileText, Loader2 } from 'lucide-react';

export default function ConsultationBooking() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('general');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 8) {
      alert('يرجى كتابة رقم الجوال للتواصل.');
      return;
    }

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
          source_channel: 'consultation_section'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // Still show success to not block user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>ابدأ رحلة النجاح مع مستشارينا</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-cairo text-white mb-4">
            تحدث مع خبير تسويقي الآن | احجز استشارتك المجانية
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            يسعدنا الرد على أي استفسار لديك، ومساعدتك في اختيار الخدمة الأنسب لاحتياجات متجرك لتحقيق أقصى ربحية ممكنة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Process Steps (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-base font-black font-cairo text-white">
                قنوات التواصل المباشر
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://api.whatsapp.com/send/?phone=966569623131&text=مرحباً%20فيا،%20أرغب%20في%20استشارة%20تسويقية%20لمشروعي.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-slate-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">محادثة واتساب فورية</div>
                    <div className="text-[11px] text-emerald-400 font-mono">+966 56 962 3131</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">الهاتف الموحد</div>
                    <div className="text-[11px] text-cyan-400 font-mono">+966 11 507 8066</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">البريد الإلكتروني المعتمد</div>
                    <div className="text-[11px] text-slate-400 font-mono">contact@via-ai.co</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens after contacting */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                ماذا يحدث بعد إرسال طلبك؟
              </h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">جدولة مكالمة هاتفية</div>
                    <div className="text-[11px] text-slate-400">نتواصل معك في الوقت الأنسب لك لمناقشة أهدافك.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">جلسة استكشافية وتحليل تقني</div>
                    <div className="text-[11px] text-slate-400">نعقد جلسة استشارية لفحص المتجر وتحديد مكامن القوة والخلل.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">إعداد العرض والخطة المخصصة</div>
                    <div className="text-[11px] text-slate-400">نقدم لك خطة واضحة بالأرقام والعائد المتوقع لمشروعك.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 text-right">
                <h3 className="text-base sm:text-lg font-black font-cairo text-white border-b border-slate-800 pb-3">
                  نموذج طلب الاستشارة التسويقية المجانية
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم الكريم:</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="اسمك الكريم"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الجوال / الواتساب:</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX أو +9665XXXXXXXX"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">البريد الإلكتروني:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@business.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">الخدمة المستهدفة:</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="general">استشارة تسويقية شاملة</option>
                      <option value="seo">تحسين محركات البحث وسيو الذكاء الاصطناعي</option>
                      <option value="social">إدارة حسابات التواصل الاجتماعي</option>
                      <option value="ads">الحملات الإعلانية الممولة والمتاجر</option>
                      <option value="influencers">التسويق عبر المؤثرين</option>
                      <option value="design">التصميم والهوية البصرية</option>
                      <option value="motion">الموشن جرافيك والفيديو</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">نبذة عن مشروعك أو استفسارك:</label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="رابط المتجر، الميزانية الشهرية المقترحة، وأبرز التحديات الحالية..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  <span>إرسال طلب الاستشارة وفحص المتجر الآن</span>
                </button>
                
                <div className="text-[11px] text-center text-slate-400">
                  🔒 بياناتك مشفرة ومحمية بخصوصية تامة، ولن يتم استخدامها إلا لمناقشة مشروعك.
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-cairo text-white">تم استلام طلبك بنجاح!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  شكراً لثقتك في فيا (VIA AI). تم تسجيل طلب استشارتك بنجاح وسيقوم أحد خبرائنا بمراجعة متجرك والتواصل معك عبر الواتساب في غضون ساعتين عمل.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=966569623131&text=السلام%20عليكم،%20أرسلت%20طلب%20استشارة%20باسم%20(${encodeURIComponent(fullName || 'عميل')})%20بخصوص%20${encodeURIComponent(service)}.%20أرغب%20في%20بدء%20المحادثة%20مباشرة.&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>تحدث مع الخبير عبر واتساب الآن</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setPhone('');
                      setDetails('');
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-900 text-slate-300 text-xs font-bold border border-slate-800"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

