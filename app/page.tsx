import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"
import { Process } from "@/components/process"
import { Portfolio } from "@/components/portfolio"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero3D } from "@/components/hero-3d"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero3D />
      <Services />
      <Technologies />
      <Process />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
