import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const FAQS = [
  {
    id: 'faq_1',
    question: 'ما الذي يميز Green Arrow عن شركات التسويق الإلكتروني التقليدي؟',
    answer: 'تتميز Green Arrow بالتركيز على إعلانات الأداء (Performance Ads) والنمو الحقيقي للمبيعات. لا نكتفي بالظهور أو المشاهدات الوهمية، بل نربط كل ريال بحملات خوارزمية عالية التحويل، ونعد علامتك التجارية للتصدر في محركات بحث الذكاء الاصطناعي (ChatGPT, Gemini, Google AI) لضمان مسار مبيعات صاعد دائماً للأعلى ︽.'
  },
  {
    id: 'faq_2',
    question: 'ما هي الخدمات الرئيسية التي تقدمها Green Arrow؟',
    answer: 'نقدم حلولاً متكاملة تشمل: إدارة الحملات الإعلانية الممولة الموجهة (Snapchat, TikTok, Meta, Google)، تحسين محركات البحث وسيو الذكاء الاصطناعي (SEO / GEO)، إدارة منصات التواصل الاجتماعي وصناعة المحتوى الفيروسي، التصميم والتصوير الجرافيكي الاحترافي، فيديوهات الموشن جرافيك، وتطوير وتجهيز المتاجر الإلكترونية (سلة، زد، وشوبيفاي).'
  },
  {
    id: 'faq_3',
    question: 'كيف يتم تسعير الباقات الشهرية في Green Arrow؟',
    answer: 'تختلف قيمة الباقات حسب أهداف مشروعك، الميزانية الإعلانية، وحجم الاستراتيجية المناسبة لعلامتك التجارية. في Green Arrow لا نقدم حلولاً معلبة، بل نبدأ بتحليل وضع مشروعك ونشاطك التسويقي لتحديد الخطة التي تضمن أعلى عائد استثماري (ROAS) ونمو ممكن.'
  },
  {
    id: 'faq_4',
    question: 'لماذا تعد إعلانات الأداء (Performance Ads) وسيو الذكاء الاصطناعي أساس النجاح اليوم؟',
    answer: 'لأن إعلانات الأداء تضمن توجيه ميزانيتك نحو الجمهور الأكثر استعداداً للشراء والطلب، وسيو الذكاء الاصطناعي يضمن ظهور متجرك وترشيحه للمستهلكين كأفضل خيار في بحث Google ومحادثات الـ AI، مما يقضي على الهدر الإعلاني ويضاعف صافي أرباحك.'
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq_1');

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#050806]">
      
      {/* Background Accent in Emerald */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b1610] border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.25)] text-emerald-300 text-xs font-bold mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>هل لديك استفسار؟</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            الأسئلة <span className="gradient-text-via">الشائعة</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            نسعد بالإجابة على استفساراتك ومناقشة أهدافك لوضع معاً خطة النمو لعلامتك التجارية.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="via-card rounded-2xl overflow-hidden transition-all duration-300 bg-[#070e0a]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 select-none hover:bg-emerald-500/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#0a140f] border border-emerald-500/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-500 text-black' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-emerald-500/15 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
