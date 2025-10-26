"use client"
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
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ScrollFadeIn threshold={0.1}><Hero3D /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.15}><Services /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.2}><Technologies /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.2}><Process /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.2}><Portfolio /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.2}><Team /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.2}><Testimonials /></ScrollFadeIn>
      <ScrollFadeIn threshold={0.2}><Contact /></ScrollFadeIn>
      <Footer />
    </main>
  )
}
