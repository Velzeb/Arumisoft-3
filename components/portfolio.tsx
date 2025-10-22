import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Desarrollo Web",
    description: "Plataforma de comercio electrónico con más de 10,000 productos y procesamiento de pagos",
    image: "/modern-ecommerce-platform.jpg",
  },
  {
    title: "App de Salud",
    category: "Aplicación Móvil",
    description: "Aplicación móvil para seguimiento de salud y bienestar con 50k+ usuarios",
    image: "/health-tracking-app.png",
  },
  {
    title: "Sistema ERP",
    category: "Software Empresarial",
    description: "Sistema de gestión empresarial completo para manufactura",
    image: "/enterprise-erp-dashboard.jpg",
  },
  {
    title: "Plataforma Educativa",
    category: "EdTech",
    description: "LMS con videoconferencias y gestión de cursos online",
    image: "/online-learning-platform.png",
  },
  {
    title: "FinTech Dashboard",
    category: "Finanzas",
    description: "Dashboard analítico para gestión de inversiones y portafolios",
    image: "/financial-analytics-dashboard.png",
  },
  {
    title: "IoT Platform",
    category: "Internet de las Cosas",
    description: "Plataforma de monitoreo y control de dispositivos IoT en tiempo real",
    image: "/iot-monitoring-platform.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Algunos de los proyectos exitosos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <Button variant="outline" size="sm" className="group/btn bg-transparent">
                  Ver Proyecto
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
