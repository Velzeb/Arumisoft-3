"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  from?: number
  to: number
  duration?: number // ms
  className?: string
}

export default function AnimatedCounter({ from = 0, to, duration = 1500, className }: Props) {
  const [value, setValue] = useState(from)
  const mounted = useRef(false)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const nodeRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (prefersReducedMotion()) {
      setValue(to)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      })
    }, { threshold: 0.3 })

    if (nodeRef.current) observer.observe(nodeRef.current)
    return () => observer.disconnect()
  }, [to])

  useEffect(() => {
    if (!visible) return
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const current = Math.floor(from + (to - from) * easeOutCubic(progress))
      setValue(current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [visible, from, to, duration])

  return (
    <div ref={nodeRef} className={className} aria-live="polite">
      {value}
    </div>
  )
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch (e) {
    return false
  }
}
