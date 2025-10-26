"use client"

import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";

export default function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const userInteractedRef = useRef<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay: advance every 4s when not paused. Pause on hover/focus or after user interaction.
  useEffect(() => {
    function clearAutoplay() {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    }

    if (!emblaApi) return;

    clearAutoplay();
    if (!isPaused) {
      autoplayRef.current = window.setInterval(() => {
        if (!emblaApi) return;
        try {
          if (emblaApi.canScrollNext()) emblaApi.scrollNext();
          else emblaApi.scrollTo(0);
        } catch (e) {
          // ignore runtime errors from embla when unmounted
        }
      }, 4000);
    }

    return () => {
      clearAutoplay();
    };
  }, [emblaApi, isPaused]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!emblaApi) return
      if (e.key === 'ArrowRight') emblaApi.scrollNext()
      if (e.key === 'ArrowLeft') emblaApi.scrollPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [emblaApi])

  function scrollTo(index: number) {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    // pause autoplay briefly after user interaction
    setIsPaused(true);
    if (userInteractedRef.current) window.clearTimeout(userInteractedRef.current);
    userInteractedRef.current = window.setTimeout(() => setIsPaused(false), 6000);
  }

  return (
    <section aria-label="Proyectos destacados" className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Carousel */}
          <div>
            <div
              className="embla overflow-hidden"
              ref={emblaRef as any}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              tabIndex={-1}
              aria-roledescription="carousel"
            >
              <div className="embla__container flex">
                {projects.map((p, i) => (
                  <div key={p.title} className="embla__slide min-w-full pr-4">
                    <div className="relative h-80 md:h-[520px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={p.images?.[0] || "/placeholder.jpg"}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={i < 2}
                      />
                        <div className="absolute left-6 bottom-6 carousel-overlay-label rounded px-4 py-3 text-white max-w-[80%]">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-sm text-white/90 mt-1">{p.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => scrollTo(i)}
                  className={`relative rounded overflow-hidden border-2 ${i === selected ? "border-primary" : "border-transparent"} flex-none w-28 h-20`}
                  aria-current={i === selected}
                  aria-label={`Ver ${p.title}`}
                >
                  <Image src={p.images?.[0] || "/placeholder.jpg"} alt={p.title} fill style={{ objectFit: "cover" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Details panel */}
          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[selected].title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-background/70 p-6 rounded-lg shadow-lg"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm font-medium mb-3">
                  {projects[selected].category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{projects[selected].title}</h3>
                <p className="text-muted-foreground mb-4">{projects[selected].description}</p>
                <ul className="list-disc pl-5 text-muted-foreground mb-4">
                  <li>Entrega rápida: enfoque MVP</li>
                  <li>Equipo dedicado de ingeniería y diseño</li>
                  <li>Soporte post-lanzamiento y mantenimiento</li>
                </ul>

                <div className="flex gap-3">
                  <Button variant="accent" onClick={() => window.open(`/proyectos/${slugify(projects[selected].title)}`, "_self")}>Ver detalles</Button>
                  <Button onClick={() => (window.location.href = "#contacto")}>Contactar</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
