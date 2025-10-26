import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Arumisoft - Desarrollo de Software Profesional",
  description: "Transformamos tus ideas en software excepcional. Desarrollo web, apps móviles, soluciones cloud y más.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans antialiased ${_poppins.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
