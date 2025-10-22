import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Database, Palette, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables con las últimas tecnologías como React, Next.js y Node.js",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Desarrollo nativo e híbrido para iOS y Android con experiencias de usuario excepcionales",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Arquitecturas cloud escalables en AWS, Azure y Google Cloud para máximo rendimiento",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "APIs RESTful y GraphQL robustas con bases de datos optimizadas y seguras",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseños intuitivos y atractivos centrados en la experiencia del usuario",
  },
  {
    icon: ShieldCheck,
    title: "Consultoría IT",
    description: "Asesoramiento estratégico para optimizar tus procesos tecnológicos",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos soluciones completas de desarrollo de software adaptadas a las necesidades de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
