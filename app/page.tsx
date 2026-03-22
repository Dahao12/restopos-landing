import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Integrations from '@/components/Integrations'
import DemoForm from '@/components/DemoForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Integrations />
      <Testimonials />
      <DemoForm />
      <Footer />
    </main>
  )
}