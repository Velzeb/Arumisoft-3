"use client"

import Image from "next/image";
// dynamic import helper (only import once)
import dynamic from "next/dynamic";
import { useState } from "react";
import { ScrollFadeIn } from "@/components/scroll-fade-in";
const PortfolioCarousel = dynamic(() => import("./portfolio-carousel"), { ssr: false });
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const Lightbox = dynamic(() => import("./lightbox"), { ssr: false });

export function Portfolio() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  function openGallery(images: string[], index = 0) {
    setCurrentImages(images);
    setStartIndex(index);
    setOpen(true);
  }

  return (
    <section id="portfolio" className="py-24 bg-background section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-title">
          <h2 className="text-2xl md:text-3xl font-medium mb-2">Destacados</h2>
          <p id="portfolio-help" className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Selección curada. Haz clic en una miniatura para ver el case study o usa los filtros para explorar por industria.
          </p>
        </div>

        {/* New elegant carousel showcase */}
  <PortfolioCarousel aria-describedby="portfolio-help" />
      </div>
    </section>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

