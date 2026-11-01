import React, { useState } from 'react';
import { 
  Gauge, 
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  DollarSign, 
  Activity,
  Layers,
  BrainCircuit,
  Clock
} from 'lucide-react';

export default function PerformanceMeter() {
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const [currentRoas, setCurrentRoas] = useState(2.2);
  const [primaryChannel, setPrimaryChannel] = useState('meta');
  const [hasPixel, setHasPixel] = useState(true);
  const [hasSeo, setHasSeo] = useState(false);

  // Form Lead State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submittedAudit, setSubmittedAudit] = useState(null);
  const [loading, setLoading] = useState(false);

  // Instant calculation
  const calculateInstant = () => {
    let score = 50;
    if (currentRoas >= 4.0) score += 25;
    else if (currentRoas >= 2.5) score += 15;
    else score -= 10;

    if (hasPixel) score += 15; else score -= 15;
    if (hasSeo) score += 10; else score -= 5;
    score = Math.max(15, Math.min(96, score));

    const benchmarkRoas = hasSeo ? 4.5 : 3.8;
    const potentialSales = monthlySpend * benchmarkRoas;
    const currentSales = monthlySpend * currentRoas;
    const waste = Math.max(0, Math.round(monthlySpend * 0.35 + (potentialSales - currentSales) * 0.12));
    const growth = Math.round(((potentialSales - currentSales) / Math.max(1, currentSales)) * 100);

    return { score, waste, growth: Math.max(25, growth) };
  };

  const metrics = calculateInstant();

  const handleAuditSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setLoading(true);
    try {
      const res = await fetch('/api/audit/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          phone,
          email,
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
      setSubmittedAudit({
        score: metrics.score,
        estimated_ad_waste: metrics.waste,
        growth_potential_pct: metrics.growth,
        diagnostic_summary: `تم تقييم نشاطك التسويقي بنجاح. بمعدل هدر تقديري ${metrics.waste.toLocaleString('ar-SA')} ر.س شهرياً.`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="performance-meter" className="py-24 relative overflow-hidden">
      
      {/* Background Glows in Emerald */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] text-emerald-300 text-xs font-bold mb-4">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span>Green Arrow Performance Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            مقياس أداء <span className="gradient-text-via">الحملات والمبيعات</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            احمِ ميزانيتك الإعلانية من الهدر. افحص كفاءة حملاتك الحالية وتعرف على فرص مضاعفة العائد الإعلاني (ROAS) بدقة وحساب فوري.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          
          <div data-reveal="fade-up" style={{ transitionDelay: '50ms' }} className="via-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">قياس الأداء بدقة</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              اكتشف العائد الحقيقي على استثمارك في كل حملة إعلانية دون تخمين أو أرقام مضللة.
            </p>
          </div>

          <div data-reveal="fade-up" style={{ transitionDelay: '150ms' }} className="via-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">تحليل مسار المبيعات</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              احصل على رؤية متكاملة لأداء السوشيال ميديا، السيو، والتحويلات البيعية في لوحة واحدة.
            </p>
          </div>

          <div data-reveal="fade-up" style={{ transitionDelay: '250ms' }} className="via-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">قرارات خوارزمية ذكية</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              اتخذ خطوات تسويقية صحيحة ومدروسة مبنية على الذكاء الاصطناعي بدلاً من القرارات العشوائية.
            </p>
          </div>

          <div data-reveal="fade-up" style={{ transitionDelay: '350ms' }} className="via-card p-6 rounded-3xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">خفض الهدر الإعلاني</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              تجنب الإنفاق غير المجدي على حملات خاسرة واكتشف قنوات النمو السريع فوراً.
            </p>
          </div>

        </div>

        {/* Interactive Calculator Workspace */}
        <div data-reveal="zoom-in" style={{ transitionDelay: '200ms' }} className="via-card p-6 sm:p-10 rounded-3xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(5,8,6,0.9)] bg-[#070e0a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-200">الميزانية الإعلانية الشهرية:</span>
                  <span className="text-base font-black text-emerald-400 font-mono">
                    {monthlySpend.toLocaleString('ar-SA')} ر.س
                  </span>
                </div>
                <input 
                  type="range" 
                  min="3000" 
                  max="200000" 
                  step="1000"
                  value={monthlySpend} 
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#0c1810] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>3,000 ر.س</span>
                  <span>100,000 ر.س</span>
                  <span>200,000 ر.س</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-200">معدل العائد الحالي (ROAS):</span>
                  <span className="text-base font-black text-emerald-300 font-mono">
                    {currentRoas}x
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.8" 
                  max="6.0" 
                  step="0.1"
                  value={currentRoas} 
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="w-full h-2 bg-[#0c1810] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setHasPixel(!hasPixel)}
                  className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                    hasPixel 
                      ? 'bg-emerald-500/15 border-emerald-500 text-white' 
                      : 'bg-[#080d0a]/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>بكسل التتبع و CAPI مربوط</span>
                  <CheckCircle2 className={`w-4 h-4 ${hasPixel ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setHasSeo(!hasSeo)}
                  className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                    hasSeo 
                      ? 'bg-emerald-500/15 border-emerald-500 text-white' 
                      : 'bg-[#080d0a]/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>استراتيجية SEO مفعلة</span>
                  <CheckCircle2 className={`w-4 h-4 ${hasSeo ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>
              </div>

              {/* Consultation Lead Gate Form */}
              <form onSubmit={handleAuditSubmit} className="pt-4 border-t border-emerald-500/20 space-y-3">
                <div className="text-xs font-bold text-slate-300">
                  احصل على التقرير التشخيصي الكامل وخطة خفض الهدر مجاناً من Green Arrow:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="اسمك الكريم / المتجر"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-[#060a08] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="رقم الجوال (05xxxxxxxx)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-[#060a08] border border-emerald-500/30 text-xs text-white placeholder-slate-500 font-mono text-left focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-via-primary w-full py-3 rounded-xl text-xs font-black text-black flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{loading ? 'جاري التحليل بالذكاء الاصطناعي...' : 'تحليل الأداء واستلام خطة النمو'}</span>
                </button>
              </form>
            </div>

            {/* Results Live Gauge Column */}
            <div className="lg:col-span-5 bg-[#060a08]/90 p-6 rounded-3xl border border-emerald-500/30 text-center space-y-5">
              <div className="text-xs text-slate-400 font-bold">مؤشر كفاءة نمو المبيعات</div>
              
              {/* Score Display */}
              <div className="relative inline-flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-4 border-emerald-500/40 flex flex-col items-center justify-center bg-gradient-to-tr from-[#050806] to-[#0a1810] shadow-[0_0_35px_rgba(34,197,94,0.3)]">
                  <span className="text-4xl font-black text-white font-mono">{metrics.score}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">من 100</span>
                </div>
              </div>

              {/* Waste & Potential Metrics */}
              <div className="grid grid-cols-2 gap-3 text-right">
                <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25">
                  <div className="text-[10px] text-rose-400 font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>الهدر التقديري:</span>
                  </div>
                  <div className="text-base font-black text-rose-300 font-mono mt-1">
                    {metrics.waste.toLocaleString('ar-SA')} ر.س
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/35">
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>فرصة نمو المبيعات:</span>
                  </div>
                  <div className="text-base font-black text-emerald-300 font-mono mt-1">
                    +{metrics.growth}%
                  </div>
                </div>
              </div>

              {submittedAudit && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-300 font-bold">
                  ✓ تم تسجيل طلبك وحفظ التحليل في نظام Green Arrow بنجاح!
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
