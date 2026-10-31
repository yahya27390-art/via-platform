import React, { useState } from 'react';
import { Gauge, AlertTriangle, TrendingUp, CheckCircle, ArrowLeft, MessageCircle, Sparkles, Loader2 } from 'lucide-react';

export default function PerformanceMeter() {
  const [storeUrl, setStoreUrl] = useState('');
  const [monthlySpend, setMonthlySpend] = useState(15000);
  const [currentRoas, setCurrentRoas] = useState(2.3);
  const [primaryChannel, setPrimaryChannel] = useState('mixed');
  const [hasPixel, setHasPixel] = useState(true);
  const [hasSeo, setHasSeo] = useState(false);

  // Form lead submission state
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedAudit, setSubmittedAudit] = useState(null);

  // Calculations
  const calculateLocalMetrics = () => {
    let wasteRatio = 0.32;
    if (currentRoas < 1.8) wasteRatio = 0.44;
    else if (currentRoas > 3.5) wasteRatio = 0.16;

    if (!hasPixel) wasteRatio += 0.08;
    if (!hasSeo) wasteRatio += 0.05;

    const estimatedWaste = Math.round(monthlySpend * wasteRatio);
    let score = Math.round((currentRoas / 4.5) * 60);
    if (hasPixel) score += 20;
    if (hasSeo) score += 15;
    score = Math.max(25, Math.min(95, score));

    const growthPct = Math.round((1 - (currentRoas / 4.5)) * 140) + 30;

    return {
      waste: estimatedWaste,
      score,
      growth: Math.max(35, Math.min(220, growthPct))
    };
  };

  const metrics = calculateLocalMetrics();

  const handleOpenLeadGate = (e) => {
    e.preventDefault();
    setShowLeadModal(true);
  };

  const handleSubmitAudit = async (e) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 8) {
      alert('يرجى إدخال رقم هاتف صحيح للتواصل عبر الواتساب.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/audit/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          phone: phone,
          email: email,
          store_url: storeUrl || 'https://mystore.sa',
          monthly_ad_spend: monthlySpend,
          current_roas: currentRoas,
          primary_channel: primaryChannel,
          has_pixel: hasPixel,
          has_seo: hasSeo
        })
      });

      const data = await res.json();
      setSubmittedAudit(data);
    } catch (err) {
      console.error(err);
      // Fallback local calculation
      setSubmittedAudit({
        score: metrics.score,
        estimated_ad_waste: metrics.waste,
        growth_potential_pct: metrics.growth,
        diagnostic_summary: `تم تقييم نشاطك الإعلاني بنجاح بمعدل هدر تقديري ${metrics.waste.toLocaleString('ar-SA')} ر.س شهرياً.`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="performance-meter" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <Gauge className="w-4 h-4" />
            <span>تشخيص فوري مدعوم بالذكاء الاصطناعي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-cairo text-white mb-4">
            أداة مقياس الأداء الشامل | دليلك الحقيقي لنجاح مشروعك
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            لا تضيع جهودك وميزانيتك بعد الآن. هذه الأداة ستساعدك على فهم كل ما يحدث في نشاطك التسويقي واكتشاف الهدر الإعلاني بلمسة زر.
          </p>
        </div>

        {/* The Calculator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-base sm:text-lg font-black font-cairo text-white flex items-center gap-2 border-b border-slate-800/80 pb-4">
              <span>أدخل مؤشرات حملاتك التسويقية الحالية</span>
            </h3>

            {/* Store URL Input */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">رابط المتجر أو الموقع الإلكتروني:</label>
              <input
                type="url"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                placeholder="https://yourstore.sa"
                className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            {/* Spend Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-300">الميزانية الإعلانية الشهرية:</span>
                <span className="text-cyan-400 font-mono font-black text-sm">{monthlySpend.toLocaleString('ar-SA')} ر.س</span>
              </div>
              <input
                type="range"
                min="3000"
                max="100000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>3,000 ر.س</span>
                <span>50,000 ر.س</span>
                <span>100,000+ ر.س</span>
              </div>
            </div>

            {/* ROAS Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-300">العائد الحالي على الإنفاق الإعلاني (ROAS):</span>
                <span className="text-emerald-400 font-mono font-black text-sm">{currentRoas}x</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.1"
                value={currentRoas}
                onChange={(e) => setCurrentRoas(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>1.0x (منخفض)</span>
                <span>2.5x (متوسط)</span>
                <span>4.0x+ (ممتاز)</span>
              </div>
            </div>

            {/* Channel Options */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">المنصة الإعلانية الرئيسية:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'snapchat', label: 'سناب شات' },
                  { id: 'tiktok', label: 'تيك توك' },
                  { id: 'google', label: 'إعلانات Google' },
                  { id: 'mixed', label: 'قنوات متعددة' }
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setPrimaryChannel(c.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      primaryChannel === c.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Readiness Checkboxes */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 border-t border-slate-800/80">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={hasPixel}
                  onChange={(e) => setHasPixel(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0"
                />
                <span>تتبع التحويلات (Pixel & CAPI) مفعّل بشكل سليم</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={hasSeo}
                  onChange={(e) => setHasSeo(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0"
                />
                <span>المتجر مهيأ لسيو الذكاء الاصطناعي (SEO / GEO)</span>
              </label>
            </div>
          </div>

          {/* Results Diagnostic Display (5 Cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl shadow-cyan-950/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-400">النتيجة التقديرية الفورية</span>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-lg border border-cyan-500/20">
                  AI Diagnostic
                </span>
              </div>

              {/* Gauge Score */}
              <div className="text-center py-4 mb-6">
                <div className="text-5xl font-black font-cairo text-white mb-2">
                  {metrics.score}<span className="text-2xl text-slate-500 font-normal">/100</span>
                </div>
                <div className={`text-xs font-bold inline-block px-3 py-1 rounded-full ${
                  metrics.score > 70 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : metrics.score > 45 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}>
                  {metrics.score > 70 ? 'أداء إعلاني مستقر وجيد' : metrics.score > 45 ? 'أداء متوسط مع وجود هدر قابل للإصلاح' : 'هدر إعلاني مرتفع يستلزم تدخلاً فورياً'}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-rose-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>الهدر الشهري التقديري:</span>
                  </div>
                  <div className="text-sm font-black font-mono text-rose-400">
                    -{metrics.waste.toLocaleString('ar-SA')} ر.س
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>فرصة نمو المبيعات (مع فيا):</span>
                  </div>
                  <div className="text-sm font-black font-mono text-emerald-400">
                    +{metrics.growth}%
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div>
              <button
                type="button"
                onClick={handleOpenLeadGate}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-200 hover:from-cyan-300 hover:to-white text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>احصل على خطة العلاج والتقرير الكامل مجاناً</span>
              </button>
              <div className="text-[10px] text-center text-slate-400 mt-2">
                🔒 فحص استشاري مباشر عبر واتساب بدون أي التزام مالي
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lead Capture Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-md p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-2xl relative">
            <button
              onClick={() => setShowLeadModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white text-sm font-bold"
            >
              ✕
            </button>

            {!submittedAudit ? (
              <form onSubmit={handleSubmitAudit} className="space-y-4">
                <div className="text-center mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-2 border border-cyan-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black font-cairo text-white">إرسال التقرير التحليلي المخصص</h3>
                  <p className="text-xs text-slate-400">
                    أدخل رقم هاتفك لنرسل لك تفاصيل الخطة التسويقية وتقرير الهدر الإعلاني مباشرة:
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الاسم أو اسم المتجر:</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: متجر أصايل"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">رقم الجوال / الواتساب (سعودي):</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XXXXXXXX أو 9665XXXXXXXX"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">البريد الإلكتروني (اختياري):</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="info@yourdomain.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  <span>إرسال التقرير وفتح محادثة الواتساب</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black font-cairo text-white">تم تحليل نشاطك التسويقي بنجاح!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {submittedAudit.diagnostic_summary}
                </p>

                <div className="pt-2">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=966569623131&text=مرحباً%20فيا%20(VIA%20AI)،%20أجريت%20فحص%20المتجر%20(${encodeURIComponent(storeUrl || 'متجري')})%20بميزانية%20${monthlySpend}%20ر.س%20وحصلت%20على%20تقييم%20${submittedAudit.score}%20مع%20هدر%20تقديري%20${submittedAudit.estimated_ad_waste}%20ر.س.%20أرغب%20في%20مناقشة%20خطة%20العلاج.&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>متابعة الخطة مع خبير فيا على الواتساب</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

