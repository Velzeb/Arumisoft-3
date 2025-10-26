import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Portfolio } from "@/components/portfolio"
import PortfolioGrid from "@/components/portfolio-grid"
import FeaturedCaseStudy from "@/components/featured-case-study"

export default function PortafolioPage() {
  // use shared dataset from data/projects.ts
  const proyectos = projects.map((p) => ({
    title: p.title,
    description: p.description,
    image: p.images?.[0] || "/placeholder.svg",
    tags: ((p as any).tags ?? []) as string[],
    category: (p as any).category ?? "Proyecto",
  }))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-balance">
              Nuestro <span className="text-primary">portafolio</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Proyectos que demuestran nuestra experiencia y enfoque en resultados.
            </p>
          </div>

          {/* First: Featured carousel */}
          <div className="mt-6">
            <Portfolio />
          </div>

          {/* Featured case study separated */}
          <div className="mt-12">
            <FeaturedCaseStudy />
          </div>

          {/* Then: Grid with filters and enriched cards */}
          <div className="mt-16" id="projects">
            <h2 className="text-3xl font-bold mb-4 text-center">Todos los proyectos</h2>
            <PortfolioGrid projects={projects.map((p) => ({
              title: p.title,
              description: p.description,
              image: p.images?.[0] || '/placeholder.svg',
              tags: (p as any).tags || [],
              category: (p as any).category || 'Proyecto',
            }))} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
