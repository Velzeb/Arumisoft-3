import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Database, Shield, Zap, Globe, Cpu, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ServiciosPage() {
  const servicios = [
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables con las últimas tecnologías",
      features: ["React, Next.js, Vue.js", "Diseño responsive", "SEO optimizado", "Progressive Web Apps"],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones nativas e híbridas para iOS y Android",
      features: ["React Native, Flutter", "UI/UX intuitivo", "Integración con APIs", "Publicación en stores"],
      color: "text-secondary",
    },
    {
      icon: Cloud,
      title: "Soluciones Cloud",
      description: "Infraestructura escalable y segura en la nube",
      features: ["AWS, Azure, Google Cloud", "Arquitectura serverless", "CI/CD automatizado", "Monitoreo 24/7"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Sistemas backend robustos y APIs RESTful/GraphQL",
      features: ["Node.js, Python, Go", "Microservicios", "Bases de datos SQL/NoSQL", "Documentación completa"],
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protección integral de tus sistemas y datos",
      features: [
        "Auditorías de seguridad",
        "Encriptación de datos",
        "Cumplimiento normativo",
        "Respuesta a incidentes",
      ],
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Optimiza procesos con automatización inteligente",
      features: [
        "RPA (Robotic Process Automation)",
        "Integración de sistemas",
        "Workflows personalizados",
        "IA y Machine Learning",
      ],
      color: "text-secondary",
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Tiendas online completas y sistemas de pago",
      features: ["Shopify, WooCommerce, custom", "Pasarelas de pago", "Gestión de inventario", "Analytics avanzado"],
      color: "text-primary",
    },
    {
      icon: Cpu,
      title: "IA & Machine Learning",
      description: "Soluciones inteligentes con inteligencia artificial",
      features: [
        "Modelos predictivos",
        "Procesamiento de lenguaje natural",
        "Computer vision",
        "Chatbots inteligentes",
      ],
      color: "text-secondary",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {servicios.map((servicio, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <servicio.icon className={`w-6 h-6 ${servicio.color}`} />
                  </div>
                  <CardTitle className="text-xl">{servicio.title}</CardTitle>
                  <CardDescription className="text-base">{servicio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12 border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
