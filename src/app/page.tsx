"use client";

import Header from "@/src/components/shared/header";
import MobileBottomNav from "@/src/components/shared/mobile-bottom-nav";
import Footer from "@/src/components/shared/footer";
import HeroSection from "@/src/components/home/hero-section";
import ServicesSection from "@/src/components/home/services-section";
import PortfolioSection from "@/src/components/home/portfolio-section";
import BrandValuesSection from "@/src/components/home/brand-values-section";
import ConstructionProjectsSection from "@/src/components/home/construction-projects-section";
import WhatWeDoSection from "@/src/components/home/what-we-do-section";
import BrandingSection from "@/src/components/home/branding-section";
import DigitalExperiencesSection from "@/src/components/home/digital-experiences-section";
import ContactSection from "@/src/components/home/contact-section";

export default function LandingPage() {
  return (
    <div id="home" className="bg-[#e5d6cb] min-h-screen w-full overflow-hidden">
      <Header />

      <main className="flex-1 pt-20 pb-20 md:pb-0">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <BrandValuesSection />
        <ConstructionProjectsSection />
        <WhatWeDoSection />
        <BrandingSection />
        <DigitalExperiencesSection />
        <ContactSection />
        <Footer />
      </main>

      <MobileBottomNav />
    </div>
  );
}
