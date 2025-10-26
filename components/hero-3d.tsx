// @ts-nocheck
"use client"

import dynamic from "next/dynamic"
import React, { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Link from "next/link"

// ...existing code...

export function Hero3D() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Inline orange SVG background (decorative) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center" aria-hidden>
        <svg
          className="orange-blob w-[1000px] max-w-none opacity-95"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="gOrange" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#ffd89a" />
              <stop offset="40%" stopColor="#f17f26" />
              <stop offset="100%" stopColor="#d85f14" />
            </radialGradient>
            <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          {/* orange body */}
          <g transform="translate(0, -30)">
            <path
              className="orange-body"
              fill="url(#gOrange)"
              d="M300 40C360 30 430 40 480 90C530 140 540 200 520 260C500 320 450 380 380 410C310 440 240 450 180 420C120 390 80 320 80 260C80 200 120 90 180 70C220 55 260 50 300 40Z"
              filter="url(#blur)"
            />

            {/* leaf + stem */}
            <g transform="translate(330,20)">
              <rect x="-6" y="-30" width="12" height="28" rx="3" fill="#6aa85f" />
              <path
                className="orange-leaf"
                d="M-6 -18 C -30 -34, -60 -34, -78 -6 C -90 10, -70 28, -42 24 C -18 20, -6 -6, -6 -18 Z"
                fill="#80aa3c"
                transform="rotate(-14)"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Layout: two columns - left (content), right (visual). Canvas is hidden on small screens for performance */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Innovación en cada línea de código</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Transformamos tus <span className="text-primary">ideas</span> en
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> software</span> excepcional
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Desarrollamos soluciones tecnológicas personalizadas que impulsan el crecimiento de tu negocio con las
              últimas tecnologías del mercado
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center animate-fade-in-up">
              <Link href="/contacto">
                <Button size="lg" className="text-lg px-8">Comenzar Proyecto <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
              <Link href="/portafolio">
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 bg-background/50 backdrop-blur-sm"><Code2 className="mr-2 w-5 h-5"/>Ver Portafolio</Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "150+", label: "Proyectos Completados" },
                { number: "98%", label: "Clientes Satisfechos" },
                { number: "50+", label: "Desarrolladores" },
                { number: "10+", label: "Años de Experiencia" },
              ].map((stat, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-background/30 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 hidden lg:block">
            <Suspense fallback={<div className="w-full h-[420px] rounded-2xl bg-background/50" /> }>
              <DynamicHeroCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

const DynamicHeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false })
