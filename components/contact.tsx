"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])

  function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = e.target.files
    if (!list) return
    const arr = Array.from(list).slice(0, 5) // limit to 5 files
    setFiles((prev) => [...prev, ...arr].slice(0, 5))
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!name.trim()) return setError("Por favor ingresa tu nombre")
    if (!validateEmail(email)) return setError("Ingresa un email válido")
    setStatus("sending")

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("message", message)
      files.forEach((f, i) => formData.append("files", f))

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) throw new Error("network")

      // Simula respuesta
      const data = await res.json()
      console.log("API response", data)

      setStatus("success")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setFiles([])
      setTimeout(() => setStatus("idle"), 2000)
    } catch (err) {
      console.error(err)
      setStatus("error")
      setError("No se pudo enviar. Intenta nuevamente más tarde.")
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Hablemos de Tu Proyecto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Estamos listos para convertir tu visión en realidad. Contáctanos hoy mismo
          </p>
        </div>

        <ScrollFadeIn threshold={0.12}>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="border border-transparent hover:border-primary/10 transition-colors">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit} aria-label="Formulario de contacto">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="+34 600 000 000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje</label>
                      <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Cuéntanos sobre tu proyecto..." rows={5} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Adjuntar imágenes (opcional)</label>
                      <input
                        aria-label="Adjuntar imágenes"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFilesChange}
                        className="block text-sm text-muted-foreground"
                      />

                      {files.length > 0 && (
                        <div className="mt-3 grid grid-cols-3 gap-3">
                          {files.map((f, i) => (
                            <div key={f.name + i} className="relative rounded overflow-hidden border p-1">
                              <img src={URL.createObjectURL(f)} alt={f.name} className="w-full h-24 object-cover" />
                              <button type="button" onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-white/80 rounded px-1 text-xs">Eliminar</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {error && <div className="text-sm text-destructive">{error}</div>}
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado' : 'Enviar Mensaje'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a
                        href="mailto:info@arumisoft.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@arumisoft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Teléfono</div>
                      <a href="tel:+34900000000" className="text-muted-foreground hover:text-primary transition-colors">
                        +34 900 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Oficina</div>
                      <p className="text-muted-foreground">
                        Calle Innovación 123
                        <br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-3">¿Listo para empezar?</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Agenda una consulta gratuita de 30 minutos con nuestro equipo para discutir tu proyecto
                  </p>
                  <Button variant="outline" className="border-2 bg-transparent text-primary hover:bg-primary/5">
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
