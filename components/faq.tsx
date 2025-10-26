"use client"

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Cuánto tiempo lleva desarrollar una aplicación promedio?",
      a: "Dependiendo del alcance, un MVP puede tardar entre 8 y 16 semanas. Proyectos a mayor escala toman más tiempo según integraciones y complejidad.",
    },
    {
      q: "¿Trabajan con metodologías ágiles?",
      a: "Sí, usamos sprints y revisiones constantes para entregar valor incremental desde fases tempranas.",
    },
    {
      q: "¿Ofrecen soporte post-lanzamiento?",
      a: "Sí, ofrecemos planes de soporte y monitoreo para asegurar estabilidad y evolutivos.",
    },
    {
      q: "¿Pueden integrarse con sistemas existentes?",
      a: "Tenemos experiencia integrando ERPs, CRMs y servicios externos mediante APIs seguras.",
    },
  ];

  return (
    <section aria-label="Preguntas frecuentes" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
