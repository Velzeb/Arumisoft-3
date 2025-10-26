"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function HeroCanvas() {
  return (
    <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: 'var(--elevation-2)' }}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#80aa3c" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
