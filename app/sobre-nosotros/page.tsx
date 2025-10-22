import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Rocket, Heart } from "lucide-react"
import Image from "next/image"

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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Sobre <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales comprometidos con
              transformar ideas en realidad
            </p>
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
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2">
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
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border-2 border-primary/20">
            {[
              { icon: Award, number: "50+", label: "Premios Ganados" },
              { icon: Users, number: "200+", label: "Clientes Felices" },
              { icon: Rocket, number: "300+", label: "Proyectos Completados" },
              { icon: Target, number: "99%", label: "Tasa de Éxito" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
