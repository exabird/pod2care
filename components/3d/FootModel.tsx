'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/models/mens_foot_3d_scan.glb')
  const modelRef = useRef<THREE.Group>(null)

  // Slow auto-rotation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3 + Math.PI * 0.75
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <group ref={modelRef}>
        <primitive 
          object={scene} 
          scale={8}
          position={[0, -1, 0]}
          rotation={[0.2, 0, 0]}
        />
      </group>
    </Float>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#687a59" wireframe />
    </mesh>
  )
}

export default function FootModel() {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      {/* Glow effect behind the model */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 bg-sage-400/30 rounded-full blur-[100px] animate-pulse" />
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a5b396" />
        <pointLight position={[10, 5, 5]} intensity={0.3} color="#d3c7b3" />
        
        <Suspense fallback={<LoadingFallback />}>
          <Model />
        </Suspense>

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />

        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
        
        <Environment preset="studio" />
      </Canvas>

      {/* Interactive hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sage-500 text-sm opacity-60">
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
        <span>Cliquez et faites glisser pour interagir</span>
      </div>
    </div>
  )
}

// Preload the model
useGLTF.preload('/models/mens_foot_3d_scan.glb')
