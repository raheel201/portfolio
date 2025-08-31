'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Subtle floating geometry that follows mouse
function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse, viewport } = useThree()
  
  useFrame((state) => {
    if (meshRef.current) {
      // Follow mouse with very smooth interpolation
      const targetX = (mouse.x * viewport.width) / 8
      const targetY = (mouse.y * viewport.height) / 8
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05)
      
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshBasicMaterial
        color="#4f46e5"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  )
}

// Particle system that reacts to mouse movement
function ReactiveParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  
  const [positions, originalPositions] = useMemo(() => {
    const positions = new Float32Array(800 * 3)
    const originalPositions = new Float32Array(800 * 3)
    
    for (let i = 0; i < 800; i++) {
      const x = (Math.random() - 0.5) * 30
      const y = (Math.random() - 0.5) * 30
      const z = (Math.random() - 0.5) * 10
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      
      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z
    }
    
    return [positions, originalPositions]
  }, [])

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i]
        const y = originalPositions[i + 1]
        
        // Calculate distance from mouse (in 2D)
        const mouseX = mouse.x * 15
        const mouseY = mouse.y * 15
        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2)
        
        // Apply subtle attraction/repulsion effect
        if (distance < 5) {
          const force = (5 - distance) / 5 * 0.5
          const angle = Math.atan2(y - mouseY, x - mouseX)
          
          positions[i] = originalPositions[i] + Math.cos(angle) * force * 1.5
          positions[i + 1] = originalPositions[i + 1] + Math.sin(angle) * force * 1.5
        } else {
          // Return to original position
          positions[i] = THREE.MathUtils.lerp(positions[i], originalPositions[i], 0.02)
          positions[i + 1] = THREE.MathUtils.lerp(positions[i + 1], originalPositions[i + 1], 0.02)
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#06b6d4"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

// Subtle background grid that responds to mouse
function InteractiveGrid() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse } = useThree()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      
      // Subtle rotation based on mouse position
      meshRef.current.rotation.x = mouse.y * 0.1 + time * 0.05
      meshRef.current.rotation.y = mouse.x * 0.1 + time * 0.03
      
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -12]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  )
}

export default function Interactive3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="bg-transparent"
      >
        {/* Minimal lighting for subtle effects */}
        <ambientLight intensity={0.2} />
        
        {/* Interactive elements */}
        <FloatingGeometry />
        <ReactiveParticles />
        <InteractiveGrid />
      </Canvas>
    </div>
  )
}