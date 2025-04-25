'use client';
import React from "react";
import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import PlansSection from "@/components/sections/PlansSection";
import SimuladorSection from "@/components/sections/SimuladorSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlansSection />
      <HowItWorksSection />
      <SimuladorSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
