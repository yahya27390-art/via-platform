import React from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import PerformanceMeter from './components/PerformanceMeter';
import ServicesCatalog from './components/ServicesCatalog';
import CaseStudies from './components/CaseStudies';
import JourneyTimeline from './components/JourneyTimeline';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ConsultationBooking from './components/ConsultationBooking';
import FooterNav from './components/FooterNav';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen cosmic-bg text-slate-100 flex flex-col font-tajawal selection:bg-[#ce23bd] selection:text-white overflow-x-hidden">
      {/* Sticky Header */}
      <HeaderNav />

      {/* Main Flow Matching https://via-ai.co/ Exactly */}
      <main className="flex-grow">
        {/* 1. Hero with Floating 3D Robot 1 */}
        <HeroSection />

        {/* 2. Scrolling Results & Clients Banner (Scroll.webp) */}
        <MarqueeBanner />

        {/* 3. Comprehensive Performance Meter (أداة مقياس الأداء الشامل) */}
        <PerformanceMeter />

        {/* 4. Full Services Catalog with 3D Icons (اكتشف خدماتنا المتكاملة) */}
        <ServicesCatalog />

        {/* 5. Our Works & Case Studies with Live Screenshots (أعمالنا | نتائجنا في التحسين) */}
        <CaseStudies />

        {/* 6. Journey to the Peak with Floating 3D Robot 2 (رحلتك مع فيا | من الإقلاع إلى القمة) */}
        <JourneyTimeline />

        {/* 7. Client Testimonials (شهادات تصنع الثقة) */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions (الأسئلة الشائعة) */}
        <FAQSection />

        {/* 9. Consultation Booking & Contact (تحدث مع خبير تسويقي الآن) */}
        <ConsultationBooking />
      </main>

      {/* Footer */}
      <FooterNav />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
