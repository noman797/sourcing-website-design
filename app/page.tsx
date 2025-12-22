"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import WhyChooseUs from "@/components/why-choose-us"
import Services from "@/components/services"
import ProcessTimeline from "@/components/process-timeline"
import Categories from "@/components/categories"
import FactoryNetwork from "@/components/factory-network"
import Strengths from "@/components/strengths"
import Values from "@/components/values"
import SustainabilitySection from "@/components/sustainability-section"
import QualityCommitmentSection from "@/components/quality-commitment-section"
import StatsSection from "@/components/stats-section"
import ContactSection from "@/components/contact-section"
import PartnershipSection from "@/components/partnership-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import FloatingContactBadge from "@/components/floating-contact-badge"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Services />
      <ProcessTimeline />
      <Categories />
      <FactoryNetwork />
      <Strengths />
      <Values />
      <SustainabilitySection />
      <QualityCommitmentSection />
      <StatsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
      <FloatingContactBadge />
    </>
  )
}
