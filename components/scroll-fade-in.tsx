"use client"
import { motion, useInView } from "framer-motion"
import React from "react"
import type { ReactNode } from "react"

export function ScrollFadeIn({ children, threshold = 0.2 }: { children: ReactNode, threshold?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: threshold, once: false })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  )
}
