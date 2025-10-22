import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function PortafolioPage() {
  const proyectos = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con gestión de inventario y pagos",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      category: "E-commerce",
    },
    {
      title: "FinTech App",
      description: "Aplicación móvil para gestión financiera personal con IA",
      image: "/fintech-mobile-app.png",
      tags: ["React Native", "Node.js", "MongoDB", "AI"],
      category: "Finanzas",
    },
    {
      title: "Healthcare System",
      description: "Sistema de gestión hospitalaria con telemedicina integrada",
      image: "/healthcare-management-system.jpg",
      tags: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      category: "Salud",
    },
    {
      title: "Logistics Dashboard",
      description: "Dashboard en tiempo real para gestión de flotas y entregas",
      image: "/logistics-tracking-dashboard.png",
      tags: ["React", "Express", "Redis", "Socket.io"],
      category: "Logística",
    },
    {
      title: "EdTech Platform",
      description: "Plataforma educativa con clases en vivo y gamificación",
      image: "/online-learning-platform.png",
      tags: ["Next.js", "Supabase", "Stripe", "WebRTC"],
      category: "Educación",
    },
    {
      title: "Real Estate CRM",
      description: "CRM especializado para inmobiliarias con tours virtuales 3D",
      image: "/real-estate-crm-interface.jpg",
      tags: ["React", "Three.js", "Node.js", "MySQL"],
      category: "Inmobiliaria",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Nuestro <span className="text-primary">Portafolio</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Proyectos exitosos que demuestran nuestra experiencia y compromiso con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={proyecto.image || "/placeholder.svg"}
                    alt={proyecto.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{proyecto.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {proyecto.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{proyecto.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
