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
import ScrollProgressBar from './components/ScrollProgressBar';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize dynamic scroll reveal observer
  useScrollReveal();

  return (
    <div className="min-h-screen cosmic-bg text-slate-100 flex flex-col font-tajawal selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Dynamic Scroll Progress Bar & Back to Top */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <HeaderNav />

      {/* Main Sections with Enhanced Scroll Animations */}
      <main className="flex-grow">
        {/* 1. Hero with Interactive 3D Cyber Mascot */}
        <HeroSection />

        {/* 2. Scrolling Results & Clients Banner */}
        <MarqueeBanner />

        {/* 3. Full Services Catalog with 3D Icons (اكتشف خدماتنا المتكاملة) */}
        <ServicesCatalog />

        {/* 4. Comprehensive Performance Meter & ROI Calculator (أداة مقياس الأداء وهدر الميزانيات) */}
        <PerformanceMeter />

        {/* 5. Our Works & Case Studies with Live Screenshots (أعمالنا وقصص النجاح) */}
        <CaseStudies />

        {/* 6. Journey to the Peak with Brand New 3D Guide Mascot (رحلتك مع Green Arrow) */}
        <JourneyTimeline />

        {/* 7. Client Testimonials (شهادات تصنع الثقة) */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions (الأسئلة الشائعة) */}
        <FAQSection />

        {/* 9. Consultation Booking & Contact (تحدث مع مستشار Green Arrow الآن) */}
        <ConsultationBooking />
      </main>

      {/* Footer */}
      <FooterNav />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
