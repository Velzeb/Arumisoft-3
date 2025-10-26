import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Smartphone, Cloud, Database, Palette, ShieldCheck } from "lucide-react";
import { ScrollFadeIn } from "@/components/scroll-fade-in";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables con React, Next.js y arquitecturas serverless.",
    image: "/modern-ecommerce-platform.jpg",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Experiencias nativas e híbridas con rendimiento y UX optimizados para iOS y Android.",
    image: "/health-tracking-app.png",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Diseño y migración a infraestructuras cloud seguras y escalables (AWS / Azure / GCP).",
    image: "/healthcare-management-system.jpg",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "APIs robustas, integraciones y arquitecturas de datos para soportar crecimiento.",
    image: "/enterprise-erp-dashboard.jpg",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseño centrado en el usuario con prototipos rápidos y pruebas de usabilidad.",
    image: "/professional-female-designer.png",
  },
  {
    icon: ShieldCheck,
    title: "Consultoría IT",
    description: "Estrategia tecnológica, seguridad y optimización de procesos para tu equipo.",
    image: "/iot-monitoring-platform.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos soluciones completas de desarrollo de software adaptadas a las necesidades de tu negocio.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((s, i) => (
            <ScrollFadeIn key={s.title} threshold={0.12}>
              <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="card-frame relative w-full md:w-1/2 h-56 md:h-72 rounded-lg overflow-hidden">
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 540px" />
                </div>

                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center card-frame p-1">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Propuesta a medida y roadmap técnico</li>
                    <li>Integraciones con sistemas existentes</li>
                    <li>Soporte y mantenimiento continuado</li>
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
