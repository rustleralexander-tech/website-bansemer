'use client'

import { useState } from 'react'
import { IntroScreen } from '@/components/intro-screen'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { WhyTobiasSection } from '@/components/why-tobias-section'
import { ReviewsSection } from '@/components/reviews-section'
import { StorySection } from '@/components/story-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { ValuesSection } from '@/components/values-section'
import { PersonalSection } from '@/components/personal-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <IntroScreen onComplete={() => setIntroComplete(true)} />

      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <Navigation />
        <main id="main-content">
          <HeroSection visible={introComplete} />
          <WhyTobiasSection />
          <ReviewsSection />
          <StorySection />
          <ServicesSection />
          <ProcessSection />
          <ValuesSection />
          <PersonalSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
