import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Database, Shield, Zap, Globe, Cpu, ArrowRight, CheckCircle2, Award, Users, Rocket } from "lucide-react"
import Link from "next/link"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { Services } from "@/components/services"
import FAQ from "@/components/faq"
import ClientLogos from "@/components/client-logos"
import ProcessTimeline from "@/components/process-timeline"
import Image from "next/image"

export default function ServiciosPage() {
  

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero + Extended Content */}
      <section className="relative pt-28 pb-6 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Soluciones de <span className="text-primary">Software</span> a tu medida</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Diseñamos y construimos productos digitales que impulsan crecimiento. Desde MVPs hasta plataformas empresariales.
              </p>
              <div className="flex gap-4 mb-6">
                <Link href="/contacto">
                  <Button className="bg-primary hover:bg-primary/90">Solicitar Cotización</Button>
                </Link>
                <Link href="/portafolio">
                  <Button variant="outline">Ver Portafolio</Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="p-4 card-frame text-center">
                  <Award className="mx-auto w-6 h-6 text-primary mb-2" />
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="p-4 card-frame text-center">
                  <Users className="mx-auto w-6 h-6 text-primary mb-2" />
                  <div className="text-xl font-bold">200+</div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
                <div className="p-4 card-frame text-center">
                  <Rocket className="mx-auto w-6 h-6 text-primary mb-2" />
                  <div className="text-xl font-bold">300+</div>
                  <div className="text-sm text-muted-foreground">Implementaciones</div>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <div className="card-frame rounded-2xl-md h-full w-full relative overflow-hidden">
                <Image src="/modern-ecommerce-dashboard.png" alt="Servicios" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Services component (detailed alternating blocks) */}
          <div className="mb-12">
            <Services />
          </div>

          {/* Industries / Use Cases */}
          <ScrollFadeIn>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Casos de Uso e Industrias</h2>
              <p className="text-muted-foreground max-w-2xl mb-6">Creamos soluciones específicas que resuelven problemas reales en distintos sectores. Aquí algunos ejemplos representativos con beneficios y resultados esperados.</p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Fintech */}
                <div className="card-frame p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl animate-fade-in-up animation-delay-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/10">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Fintech</h3>
                      <p className="text-sm text-muted-foreground mt-2">Dashboards de inversión, pasarelas y sistemas de pagos seguros para empresas financieras y startups.</p>
                      <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                        <li>Integración con pasarelas y KYC/AML</li>
                        <li>Visualización de KPIs en tiempo real</li>
                        <li>Alta disponibilidad y seguridad</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Resultados típicos:</div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">+30% Retención</div>
                  </div>
                </div>

                {/* HealthTech */}
                <div className="card-frame p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl animate-fade-in-up animation-delay-400">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-accent/10">
                      <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">HealthTech</h3>
                      <p className="text-sm text-muted-foreground mt-2">Plataformas de telemedicina, gestión de pacientes y soluciones de monitoreo remoto.</p>
                      <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                        <li>Teleconsulta y gestión de citas</li>
                        <li>Monitoreo y alertas en tiempo real</li>
                        <li>Cumplimiento HIPAA/GDPR (según región)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Beneficio:</div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-white text-sm font-medium">+40% Eficiencia</div>
                  </div>
                </div>

                {/* EdTech */}
                <div className="card-frame p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl animate-fade-in-up animation-delay-600">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/10">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">EdTech</h3>
                      <p className="text-sm text-muted-foreground mt-2">Sistemas de gestión del aprendizaje, experiencias de formación y plataformas adaptativas para empresas y universidades.</p>
                      <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                        <li>Contenido interactivo y analíticas de aprendizaje</li>
                        <li>Integración SSO y sistemas de gestión</li>
                        <li>Herramientas de evaluación y reportes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Impacto:</div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">+25% Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          <ProcessTimeline />

          {/* FAQ and Client Logos */}
          <div className="mb-12">
            <FAQ />
          </div>

          <div className="mb-12">
            <ClientLogos />
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto text-center accent-gradient-bg rounded-2xl p-12 border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8">Reserva una llamada y empecemos a definir tu próximo producto.</p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 group">
                Contactar a Expertos
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
