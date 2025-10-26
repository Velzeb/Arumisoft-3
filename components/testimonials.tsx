import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

const testimonials = [
  {
    name: "Roberto Sánchez",
    company: "TechCorp",
    role: "CEO",
    content:
      "Excelente trabajo. Entregaron nuestro proyecto a tiempo y superaron nuestras expectativas. El equipo es muy profesional y comunicativo.",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    company: "StartupXYZ",
    role: "Fundadora",
    content:
      "La mejor decisión que tomamos fue trabajar con ellos. Transformaron nuestra idea en una aplicación increíble que nuestros usuarios adoran.",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    company: "Retail Solutions",
    role: "Director de IT",
    content:
      "Profesionales de primer nivel. Su experiencia en desarrollo de software empresarial es evidente en cada aspecto del proyecto.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <ScrollFadeIn threshold={0.12}>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} en {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
