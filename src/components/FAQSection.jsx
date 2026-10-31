import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const FAQS = [
  {
    id: 'faq_1',
    question: 'ما الذي يميز VIA عن شركات التسويق الإلكتروني التقليدي؟',
    answer: 'تتميز VIA بدمج تقنيات الذكاء الاصطناعي مع الخبرة التسويقية العميقة. لا نركز فقط على الظهور التقليدي، بل نساعد علامتك التجارية على الاستعداد لعصر البحث بالذكاء الاصطناعي والظهور الموصى به في أدوات مثل ChatGPT و Gemini و Perplexity، وبناء استراتيجيات مخصصة ترفع المبيعات الفعلية.'
  },
  {
    id: 'faq_2',
    question: 'ما هي الخدمات التي تقدمها فيا؟',
    answer: 'نقدم حلولاً متكاملة تشمل: تحسين محركات البحث (SEO وسيو الذكاء الاصطناعي)، إدارة الحملات الإعلانية الممولة الموجهة (Snapchat, TikTok, Meta, Google)، إدارة منصات التواصل الاجتماعي، التصميم والتصوير الجرافيكي الاحترافي، فيديوهات الموشن جرافيك، وتطوير حلول المتاجر الإلكترونية (سلة، زد، وشوبيفاي).'
  },
  {
    id: 'faq_3',
    question: 'كيف يتم تسعير الباقات الشهرية؟',
    answer: 'تختلف قيمة الباقات حسب أهداف مشروعك، الخدمات المطلوبة، وحجم الاستراتيجية المناسبة لعلامتك التجارية. في VIA لا نقدم حلولاً معلبة للجميع، بل نبدأ بتحليل وضع مشروعك ونشاطك التسويقي لتحديد الخطة التي تضمن أفضل عائد استثماري (ROI) ونمو ممكن.'
  },
  {
    id: 'faq_4',
    question: 'لماذا يعد الذكاء الاصطناعي مهماً للتسويق الرقمي اليوم؟',
    answer: 'لأن الذكاء الاصطناعي يساعد على تحليل سلوك الجمهور والبيانات التسويقية بدقة وسرعة فائقة، واكتشاف فرص الهدر الإعلاني فوراً، مما يوفر الوقت والميزانيات ويمنح علامتك التجارية ميزة تنافسية كاسحة في السوق.'
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq_1');

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8551ef]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160a38] border border-[#ce23bd]/40 shadow-[0_0_20px_rgba(206,35,189,0.25)] text-[#ce23bd] text-xs font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>هل لديك استفسار؟</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            الأسئلة <span className="gradient-text-via">الشائعة</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            نسعد بالإجابة على استفساراتك ومناقشة أهدافك لوضع معاً خطة النجاح لعلامتك التجارية.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="via-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 select-none hover:bg-[#160a38]/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#160a38] border border-[#ce23bd]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#ce23bd] text-white' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#8551ef]/15 font-normal">
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
