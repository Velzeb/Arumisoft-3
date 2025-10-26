"use client"
// Framer Motion helpers para animaciones scroll trigger
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function useScrollTrigger(threshold = 0.2) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < windowHeight * (1 - threshold)) {
        controls.start("visible")
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls, threshold])

  return [ref as React.RefObject<HTMLDivElement>, controls] as const
}

export const scrollFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}
