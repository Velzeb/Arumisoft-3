import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Analizamos tus necesidades y objetivos para entender tu visión",
  },
  {
    number: "02",
    title: "Planificación",
    description: "Diseñamos la arquitectura y estrategia del proyecto",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu solución con metodologías ágiles",
  },
  {
    number: "04",
    title: "Testing",
    description: "Garantizamos calidad con pruebas exhaustivas",
  },
  {
    number: "05",
    title: "Despliegue",
    description: "Lanzamos tu proyecto con soporte completo",
  },
  {
    number: "06",
    title: "Mantenimiento",
    description: "Soporte continuo y actualizaciones regulares",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestro Proceso</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un enfoque estructurado que garantiza el éxito de tu proyecto desde el inicio hasta el lanzamiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-card p-8 rounded-lg border-2 border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {step.title}
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
