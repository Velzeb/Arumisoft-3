import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Rocket, Heart } from "lucide-react"
import Image from "next/image"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import AnimatedCounter from "@/components/animated-counter"
import { Testimonials } from "@/components/testimonials"
import { Technologies } from "@/components/technologies"
import ClientLogos from "@/components/client-logos"
import { projects } from "@/data/projects"

export default function SobreNosotrosPage() {
  const valores = [
    {
      icon: Target,
      title: "Excelencia",
      description: "Nos comprometemos a entregar soluciones de la más alta calidad",
    },
    {
      icon: Rocket,
      title: "Innovación",
      description: "Adoptamos las últimas tecnologías para mantenernos a la vanguardia",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos en equipo con nuestros clientes para lograr el éxito",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y se refleja en cada proyecto",
    },
  ]

  const equipo = [
    {
      name: "Carlos Rodríguez",
      role: "CEO & Founder",
      image: "/professional-male-ceo-portrait.jpg",
      specialty: "Arquitectura de Software",
    },
    {
      name: "María González",
      role: "CTO",
      image: "/professional-female-cto-portrait.jpg",
      specialty: "Cloud & DevOps",
    },
    {
      name: "Juan Martínez",
      role: "Lead Developer",
      image: "/professional-male-developer.png",
      specialty: "Full Stack Development",
    },
    {
      name: "Ana López",
      role: "UX/UI Director",
      image: "/professional-female-designer.png",
      specialty: "Product Design",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sobre <span className="text-primary">Nosotros</span></h1>
                <p className="text-lg text-muted-foreground mb-6">Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales comprometidos con transformar ideas en realidad. Construimos productos escalables y medibles.</p>
                <div className="flex gap-4">
                  <a href="/contacto" className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-md shadow">Hablemos</a>
                  <a href="#casos" className="inline-flex items-center px-5 py-3 border rounded-md">Ver casos</a>
                </div>
              </div>

              <div className="relative hidden md:block">
                <img src="/haikei-blob.svg" alt="" aria-hidden className="w-full h-64 object-cover rounded-lg shadow-lg transform-gpu animate-float" />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Empoderar a las empresas con soluciones tecnológicas innovadoras que impulsen su crecimiento y
                  transformen la manera en que hacen negocios en la era digital.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser la empresa líder en desarrollo de software en Latinoamérica, reconocida por nuestra excelencia
                  técnica, innovación constante y compromiso con el éxito de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <valor.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{valor.title}</h3>
                    <p className="text-muted-foreground">{valor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Nuestro <span className="text-primary">Equipo</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Conoce a los expertos que hacen posible cada proyecto
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipo.map((miembro, index) => (
                <ScrollFadeIn key={miembro.name}>
                  <Card className="overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={miembro.image || "/placeholder.svg"}
                        alt={miembro.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-1">{miembro.name}</h3>
                      <p className="text-primary font-medium mb-2">{miembro.role}</p>
                      <Badge variant="outline">{miembro.specialty}</Badge>
                    </CardContent>
                  </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border-2 border-primary/20">
            {[
              { icon: Award, to: 50, suffix: '+', label: "Premios Ganados" },
              { icon: Users, to: 200, suffix: '+', label: "Clientes Felices" },
              { icon: Rocket, to: 300, suffix: '+', label: "Proyectos Completados" },
              { icon: Target, to: 99, suffix: '%', label: "Tasa de Éxito" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2"><AnimatedCounter to={stat.to} />{stat.suffix}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Innovación: reemplazamos el timeline por bloques innovadores */}
          <div className="mt-20">
            <section className="text-center mb-8">
              <h2 className="text-3xl font-bold">Innovación & Experimentos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Proyectos internos y pruebas de concepto que aceleran la entrega de valor y validan nuevas ideas.</p>
            </section>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Prototipos Rápidos', text: 'Prototipos navegables que validan hipótesis en días en lugar de semanas.', badge: 'En experimentación', badgeClass: 'bg-primary/10 text-primary' },
                { title: 'IA aplicada', text: 'Integraciones de modelos para automatización, clasificación y análisis de datos para casos reales.', badge: 'PoC disponible', badgeClass: 'bg-accent/10 text-accent' },
                { title: 'Integraciones Serverless', text: 'Pipelines y arquitecturas escalables sin servidor para reducción de costos y mantenimiento.', badge: 'Arquitectura', badgeClass: 'bg-primary/10 text-primary' },
              ].map((item) => (
                <ScrollFadeIn key={item.title}>
                  <div className="p-6 rounded-lg bg-card border border-border hover:shadow-xl transition transform hover:-translate-y-2 animation-delay-200">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{item.text}</p>
                    <div className={`${item.badgeClass} text-xs inline-block px-2 py-1 rounded`}>{item.badge}</div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>

            {/* Impacto medible: métricas interactivas (estilizadas) */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Impacto medible</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: 40, suffix: '%', title: 'Reducción promedio de costos' },
                  { value: 120, suffix: '%', title: 'Incremento medio en conversión' },
                  { value: 99.9, suffix: '%', title: 'SLA garantizado' },
                ].map((m) => (
                  <ScrollFadeIn key={m.title}>
                    <div className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-border text-center">
                      <div className="text-4xl font-bold text-primary mb-2"><AnimatedCounter to={Math.round(m.value)} />{m.suffix}</div>
                      <div className="text-sm text-muted-foreground">{m.title}</div>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </section>

            {/* Open Source & Design System */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Design System & Open Source</h3>
              <p className="text-muted-foreground mb-4">Mantenemos un conjunto de componentes y tokens reutilizables para acelerar el desarrollo y garantizar consistencia en productos a escala.</p>
              <div className="flex gap-4">
                <a className="text-primary underline" href="#">Ver el design system</a>
                <a className="text-primary underline" href="#">Repositorio Open Source</a>
              </div>
            </section>

            {/* Casos de éxito (small gallery) */}
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-6">Casos de Éxito</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.slice(0, 2).map((p) => (
                  <div key={p.title} className="flex items-center gap-6 bg-background/50 p-4 rounded-lg shadow-sm">
                    <div className="relative w-28 h-20 rounded overflow-hidden">
                      <Image src={p.images?.[0] || "/placeholder.jpg"} alt={p.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-1">{p.category}</div>
                      <h4 className="font-bold">{p.title}</h4>
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials, Technologies and Client logos */}
            <div className="mt-12">
              <Testimonials />
            </div>

            <div className="mt-8">
              <Technologies />
            </div>

            <div className="mt-8">
              <ClientLogos />
            </div>

            {/* CTA band */}
            <div className="mt-12">
              <div className="rounded-2xl p-10 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold">Listo para comenzar tu proyecto?</h4>
                  <p className="text-muted-foreground">Hablemos sobre objetivos, tiempos y presupuesto. Te ayudamos a armar el roadmap.</p>
                </div>
                <div>
                  <a href="/contacto" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md shadow hover:brightness-95 transition">Contactar ahora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
