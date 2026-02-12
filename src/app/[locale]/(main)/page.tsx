'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "./sections/HeroSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { TechnologiesSection } from "./sections/TechnologiesSection"
import { ProcessSection } from "./sections/ProcessSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FAQSection } from "./sections/FAQSection"
import { CaseStudy } from "./sections/CaseStudy"
import { CTASection } from "./sections/CTASection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CaseStudy />
        <ProjectsSection />
        <TechnologiesSection />
        <ProcessSection />
        <CTASection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
