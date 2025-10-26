"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

type LightboxProps = {
  images: string[];
  startIndex?: number;
  onClose: () => void;
};

export default function Lightbox({ images, startIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // Focus trap: keep focus inside the modal
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const modal = document.getElementById('arumisoft-lightbox')
    const focusable = modal?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (!focusable || focusable.length === 0) return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      previouslyFocused?.focus()
    }
  }, [])

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de proyecto"
      onClick={onClose}
    >
      <div
        className="relative max-w-[1100px] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-60 rounded bg-white/10 text-white p-2 hover:bg-white/20"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="relative aspect-[16/9] bg-zinc-900 rounded overflow-hidden">
          <Image
            src={images[index]}
            alt={`Imagen ${index + 1} de ${images.length}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <button
            onClick={prev}
            className="rounded px-3 py-2 bg-white/5 text-white hover:bg-white/10"
            aria-label="Anterior"
          >
            ← Anterior
          </button>
          <div className="text-sm text-white/80">
            {index + 1} / {images.length}
          </div>
          <button
            onClick={next}
            className="rounded px-3 py-2 bg-white/5 text-white hover:bg-white/10"
            aria-label="Siguiente"
          >
            Siguiente →
          </button>
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-auto">
            {images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setIndex(i)}
                className={`relative h-16 w-24 flex-none rounded overflow-hidden border-2 ${
                  i === index ? "border-white" : "border-transparent"
                }`}
                aria-label={`Ver imagen ${i + 1}`}
              >
                <Image src={src} alt={`Miniatura ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
