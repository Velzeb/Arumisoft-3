"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Globe, Code2, CheckCircle2, Rocket, Cpu, Award } from "lucide-react";

const steps = [
  {
    id: "discovery",
    title: "Descubrimiento",
    subtitle: "Entender el problema",
    description: "Workshops, entrevistas y análisis para alinear objetivos y definir métricas de éxito.",
    bullets: ["Stakeholders interviews", "User research & personas", "Success metrics"],
    icon: Zap,
    duration: "1-2 semanas",
    deliverables: ["Roadmap inicial", "Backlog priorizado"],
  },
  {
    id: "research",
    title: "Investigación",
    subtitle: "Validar hipótesis",
    description: "Testing cualitativo y cuantitativo para validar supuestos antes de diseñar soluciones.",
    bullets: ["Benchmarking", "Surveys", "Analytics review"],
    icon: Globe,
    duration: "1-2 semanas",
    deliverables: ["Informe de insights", "Prioridad de features"],
  },
  {
    id: "strategy",
    title: "Estrategia",
    subtitle: "Definir alcance",
    description: "Arquitectura de producto y decisiones tecnológicas que minimizan riesgos.",
    bullets: ["Scope & MVP definition", "Tech stack recommendation"],
    icon: Award,
    duration: "1 semana",
    deliverables: ["MVP scope", "Estimates"],
  },
  {
    id: "design",
    title: "Diseño & Validación",
    subtitle: "Prototipos navegables",
    description: "Prototipos y pruebas de usabilidad para afinar la experiencia antes de construir.",
    bullets: ["Clickable prototypes", "Usability tests", "Design system primitives"],
    icon: Cpu,
    duration: "2-4 semanas",
    deliverables: ["Prototipos", "Design tokens"],
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Desarrollo iterativo",
    description: "Sprints cortos con entrega continua, revisiones y demo para stakeholders.",
    bullets: ["Sprints", "Code reviews", "Automated tests"],
    icon: Code2,
    duration: "Iterativo",
    deliverables: ["Incrementos entregables", "CI/CD pipeline"],
  },
  {
    id: "qa",
    title: "QA & Launch",
    subtitle: "Pruebas y despliegue",
    description: "Pruebas E2E, performance, y despliegue controlado con monitorización post-lanzamiento.",
    bullets: ["E2E tests", "Load tests", "Canary deploys"],
    icon: CheckCircle2,
    duration: "1-2 semanas",
    deliverables: ["Release plan", "Monitoring setup"],
  },
  {
    id: "iterate",
    title: "Medir & Iterar",
    subtitle: "Aprender rápido",
    description: "Analítica continua y mejoras priorizadas por impacto y costo.",
    bullets: ["A/B testing", "Product analytics", "Roadmap updates"],
    icon: Rocket,
    duration: "Continuo",
    deliverables: ["Roadmap actualizado", "Hypothesis backlog"],
  },
];

export default function ProcessTimeline() {
  return (
    <section aria-label="Proceso de trabajo" className="mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Nuestro Proceso Ampliado</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Un flujo probado para reducir incertidumbre y entregar valor rápidamente.</p>
        </div>

        {/* Timeline - horizontal on md+, stacked on mobile */}
        <div className="relative">
          <div className="hidden md:block absolute left-6 right-6 top-12 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded" />

          <div className="grid md:grid-cols-7 gap-6 relative z-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  className="flex flex-col items-start md:items-center"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-background/60 border-2 border-border shadow-sm">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="hidden md:block text-sm text-muted-foreground">{s.duration}</div>
                  </div>

                  <div className="mt-3 md:mt-4 w-full md:w-40 text-left md:text-center">
                    <h4 className="text-md font-semibold">{s.title}</h4>
                    <div className="text-sm text-muted-foreground mt-1">{s.subtitle}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detail cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {steps.slice(0, 3).map((s, idx) => (
            <motion.div
              key={s.id}
              className="card-frame p-6 rounded-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold">{s.title}</h5>
                  <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                  <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {steps.slice(3).map((s, idx) => (
            <motion.div
              key={s.id}
              className="card-frame p-4 rounded-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-background/60 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h6 className="font-semibold">{s.title}</h6>
                  <div className="text-sm text-muted-foreground mt-1">{s.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
