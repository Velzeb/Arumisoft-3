import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Twitter } from "lucide-react"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

const team = [
  {
    name: "Carlos Rodríguez",
    role: "CEO & Fundador",
    image: "/professional-male-ceo.jpg",
  },
  {
    name: "María González",
    role: "CTO",
    image: "/professional-female-cto.jpg",
  },
  {
    name: "Juan Martínez",
    role: "Lead Developer",
    image: "/professional-male-developer.jpg",
  },
  {
    name: "Ana López",
    role: "UX/UI Designer",
    image: "/professional-female-designer.png",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestro Equipo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Profesionales apasionados dedicados a crear soluciones excepcionales
          </p>
        </div>

        <ScrollFadeIn threshold={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Linkedin className="w-5 h-5 text-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Twitter className="w-5 h-5 text-foreground" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
