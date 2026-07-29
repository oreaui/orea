"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, ContactShadows } from "@react-three/drei"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js"
import * as THREE from "three"

const SVG_MARKUP = `<svg width="206" height="133" viewBox="0 0 206 133" xmlns="http://www.w3.org/2000/svg"><path d="M144 0C178.242 0 206 27.7583 206 62V71C206 105.242 178.242 133 144 133H131.686C102.244 133 74.4654 119.349 56.4775 96.041L49.5 87L26.5 57H49.5L0 0H144ZM117 32C102.088 32 90 44.0883 90 59V77.5C90 91.3071 101.193 102.5 115 102.5H150C163.807 102.5 175 91.3071 175 77.5V59C175 44.0883 162.912 32 148 32H117Z"/></svg>`

function LogoMesh() {
  const group = useRef<THREE.Group>(null)

  const geometry = useMemo(() => {
    const loader = new SVGLoader()
    const parsed = loader.parse(SVG_MARKUP)
    const shapes = parsed.paths.flatMap((p) => SVGLoader.createShapes(p))
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 34,
      bevelEnabled: true,
      bevelThickness: 4,
      bevelSize: 3,
      bevelSegments: 6,
      curveSegments: 24,
    })
    geo.center()
    return geo
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    // gentle idle spin + subtle pointer parallax
    group.current.rotation.y = Math.sin(t * 0.3) * 0.5 + state.pointer.x * 0.4
    group.current.rotation.x = Math.cos(t * 0.25) * 0.15 - state.pointer.y * 0.25
  })

  return (
    <group ref={group}>
      {/* SVG Y axis points down; flip so the mark reads upright */}
      <mesh geometry={geometry} scale={[0.03, -0.03, 0.03]} castShadow>
        <meshStandardMaterial
          color="#e8e8ec"
          metalness={0.95}
          roughness={0.18}
          envMapIntensity={1.4}
        />
      </mesh>
    </group>
  )
}

export function Logo3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 6]} intensity={2.4} castShadow />
      <directionalLight position={[-6, -2, -4]} intensity={1.2} color="#6ea8ff" />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.9}>
          <LogoMesh />
        </Float>
        <ContactShadows
          position={[0, -3.4, 0]}
          opacity={0.4}
          scale={14}
          blur={2.6}
          far={5}
          color="#000000"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
