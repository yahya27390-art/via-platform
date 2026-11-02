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
    <div className="min-h-screen cosmic-bg text-slate-100 flex flex-col font-alexandria selection:bg-emerald-500 selection:text-black overflow-x-hidden relative">
      {/* Global Ambient Cyber Atmosphere & Glow Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle SVG Noise Filter for tactile luxury feel */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-repeat" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        
        {/* Ambient Luminous Nebula Glow Orbs */}
        <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] rounded-full bg-emerald-500/18 blur-[150px] pointer-events-none animate-pulse-slow" />
        <div className="absolute top-1/3 -left-40 w-[550px] h-[550px] rounded-full bg-green-500/12 blur-[140px] pointer-events-none" />
        <div className="absolute top-2/3 right-10 w-[600px] h-[600px] rounded-full bg-emerald-600/12 blur-[160px] pointer-events-none" />
      </div>

      {/* Dynamic Scroll Progress Bar & Back to Top */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <HeaderNav />

      {/* Main Sections with Enhanced Scroll Animations */}
      <main className="flex-grow relative z-10">
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
