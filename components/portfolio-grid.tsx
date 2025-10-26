"use client"

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  category?: string;
};

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category || "Proyecto"));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => (p.category || "Proyecto") === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div>
      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === c ? 'bg-primary text-white' : 'bg-background/60 text-muted-foreground'} transition`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto text-sm text-muted-foreground">Mostrando {filtered.length} proyectos</div>
      </div>
      {/* Grid */}
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } }
        }}
      >
        {filtered.map((proyecto, index) => (
          <motion.div key={index} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="relative h-56 overflow-hidden">
                <Image src={proyecto.image || '/placeholder.svg'} alt={proyecto.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{proyecto.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{proyecto.title}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{proyecto.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(proyecto.tags || []).slice(0,4).map((tag, t) => (
                    <Badge key={t} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div>Lanzamiento: {2020 + (index % 5)}</div>
                  <div>Equipo: {3 + (index % 6)}</div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline"><Github className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">¿Quieres ver un case study completo o discutir un proyecto similar?</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">Solicitar Revisión</Button>
      </div>
    </div>
  );
}
