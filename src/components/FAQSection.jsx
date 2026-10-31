import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const DEFAULT_FAQS = [
  {
    id: 'faq_1',
    question_ar: 'ما الذي يميز فيا (VIA) عن شركات التسويق التقليدية؟',
    answer_ar: 'ما يميز فيا هو دمج تقنيات الذكاء الاصطناعي المتقدمة مع الخبرة الاستراتيجية. نحن لا نطلق إعلانات عشوائية، بل نبدأ بإصلاح المشاكل التقنية في موقعك وتحليل سلوك العملاء لضمان أن كل ريال يُنفق يحقق عائداً ملموساً.'
  },
  {
    id: 'faq_2',
    question_ar: 'كيف تساعدني فيا في الظهور في محركات الذكاء الاصطناعي (مثل ChatGPT)؟',
    answer_ar: 'نطبق تقنيات GEO (Generative Engine Optimization) لتحسين المحتوى والبيانات المنظمة للعلامة التجارية بحيث تعتمدها نماذج الذكاء الاصطناعي كمصدر موثوق وترشح خدماتك للمستخدمين عند سؤالهم عن مجالك.'
  },
  {
    id: 'faq_3',
    question_ar: 'كم تبلغ أسعار باقات التسويق لديكم؟',
    answer_ar: 'تختلف تكلفة الباقات وفقاً لاحتياج كل مشروع وأهدافه التسويقية وحجم المنافسة في قطاعه. نحن لا نقدم قوالب جاهزة للجميع، بل نقدم خطة مخصصة وعادلة تضمن أفضل عائد على استثمارك بعد الجلسة الاستشارية الأولى.'
  },
  {
    id: 'faq_4',
    question_ar: 'ما هي المدة المتوقعة لرؤية نتائج ملموسة؟',
    answer_ar: 'الحملات الإعلانية الممولة تبدأ في إعطاء نتائج ومؤشرات أولية خلال أول 7 إلى 14 يوماً مع استمرار التحسين، بينما استراتيجيات الـ SEO وصناعة المجتمع تستغرق من 30 إلى 90 يوماً لبناء نمو مستدام ومستقر.'
  }
];

export default function FAQSection() {
  const [faqs, setFaqs] = useState(DEFAULT_FAQS);
  const [openId, setOpenId] = useState('faq_1');

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data?.length > 0) setFaqs(data.data);
      })
      .catch(() => {});
  }, []);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>إجابات واضحة وشفافة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-cairo text-white mb-4">
            هل لديك استفسار؟ إجابات على أبرز الأسئلة
          </h2>
          <p className="text-sm text-slate-400">
            كل ما تحتاج معرفته عن منهجية عمل فيا بالذكاء الاصطناعي وكيف نضمن تحقيق عائد على استثمارك.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((f) => {
            const isOpen = openId === f.id;
            return (
              <div
                key={f.id}
                className="glass-panel rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(f.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="font-cairo">{f.question_ar}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/50 font-normal">
                    {f.answer_ar}
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

