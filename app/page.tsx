import { Footer } from '@/components/site/footer'
import { HelpPicker } from '@/components/site/help-picker'
import { Hero } from '@/components/site/hero'
import { Paths } from '@/components/site/paths'
import { ProblemBridge } from '@/components/site/problem-bridge'
import { Profiles } from '@/components/site/profiles'
import { Safety } from '@/components/site/safety'
import { Schools } from '@/components/site/schools'
import { SiteNav } from '@/components/site/site-nav'
import { Signup } from '@/components/site/signup'
import { Testimonials } from '@/components/site/testimonials'
import { TrustBar } from '@/components/site/trust-bar'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <TrustBar />
        <Profiles />
        <ProblemBridge />
        <HelpPicker />
        <Paths />
        <Schools />
        <Safety />
        <Testimonials />
        <Signup />
      </main>
      <Footer />
    </>
  )
}
