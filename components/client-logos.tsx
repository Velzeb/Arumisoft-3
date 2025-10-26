"use client"

import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    "/placeholder-logo.png",
    "/placeholder-logo.svg",
    "/professional-male-ceo.jpg",
    "/professional-female-cto.jpg",
    "/professional-male-developer.png",
    "/professional-female-designer.png",
  ]

  return (
    <section aria-label="Clientes" className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Algunas empresas con las que trabajamos</h3>
        <div className="flex flex-wrap items-center gap-6 bg-background/5 p-6 rounded-lg">
          {logos.map((l, i) => (
            <div key={i} className="w-28 h-14 relative opacity-80 grayscale hover:grayscale-0 transition-all">
              <Image src={l} alt={`Cliente ${i + 1}`} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
