import React from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import PerformanceMeter from './components/PerformanceMeter';
import ServicesCatalog from './components/ServicesCatalog';
import JourneyTimeline from './components/JourneyTimeline';
import CaseStudies from './components/CaseStudies';
import ConsultationBooking from './components/ConsultationBooking';
import FAQSection from './components/FAQSection';
import FooterNav from './components/FooterNav';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-tajawal selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Sticky Header */}
      <HeaderNav />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection />
        <PerformanceMeter />
        <ServicesCatalog />
        <JourneyTimeline />
        <CaseStudies />
        <ConsultationBooking />
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterNav />

      {/* Floating Instant WhatsApp Pill */}
      <WhatsAppFloat />
    </div>
  );
}

