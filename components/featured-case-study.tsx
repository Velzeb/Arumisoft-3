"use client"

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedCaseStudy() {
  const p = projects[0];
  if (!p) return null;

  return (
    <section id="featured-case" className="mb-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 card-frame rounded-lg overflow-hidden">
            <div className="relative h-72 md:h-96">
              <Image src={p.images?.[0] || '/placeholder.jpg'} alt={p.title} fill style={{ objectFit: 'cover' }} />
              <div className="absolute left-6 bottom-6 bg-black/40 backdrop-blur-sm rounded px-4 py-3 text-white">
                <div className="text-sm font-medium">{p.category}</div>
                <h3 className="text-2xl font-bold mt-1">{p.title}</h3>
                <p className="text-sm mt-1 max-w-lg">{p.description}</p>
              </div>
            </div>
          </div>

          <div className="card-frame p-6 rounded-lg">
            <h4 className="font-semibold">Case study destacado</h4>
            <p className="text-sm text-muted-foreground mt-2">Resumen del proyecto y resultados clave. Haz click para ver más detalles del caso de estudio completo.</p>
            <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground">
              <li>Objetivo: Mejora de conversiones</li>
              <li>Resultado: +25% conversión en 3 meses</li>
              <li>Stack: Next.js · PostgreSQL · Stripe</li>
            </ul>

            <div className="mt-4 flex gap-2">
              <a href="#projects" className="flex-1">
                <Button size="sm" variant="accent" className="w-full">Ver proyectos relacionados</Button>
              </a>
              <a href="#contacto">
                <Button size="sm" variant="outline">Contactar</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
