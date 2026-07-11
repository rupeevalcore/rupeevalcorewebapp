"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, ContactShadows, Environment, MeshTransmissionMaterial, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// -------------------------------------------------------------
// 1. Abstract Financial Intelligence Sphere (Center Object)
// -------------------------------------------------------------
function CenterOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 8]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={1}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropicBlur={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          transmission={0.9}
          roughness={0.1}
          color="#d4a44d" // Accent tone
        />
        
        {/* Inner solid core representing intelligence */}
        <mesh scale={0.6}>
          <octahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#071A35" wireframe opacity={0.3} transparent />
        </mesh>
      </mesh>
    </Float>
  );
}

// -------------------------------------------------------------
// 2. Orbiting Trust Elements
// -------------------------------------------------------------
function OrbitingBadges() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const badges = [
    { text: "MSME", color: "#3b82f6", pos: [2.5, 1, 0] },
    { text: "NISM", color: "#10b981", pos: [-1.2, -2, 2] },
    { text: "Education First", color: "#8b5cf6", pos: [-2, 1.5, -1] }
  ];

  return (
    <group ref={groupRef}>
      {badges.map((badge, i) => (
        <Float key={i} speed={3} rotationIntensity={1} floatIntensity={2} position={badge.pos as [number, number, number]}>
          <Html center distanceFactor={15} zIndexRange={[100, 0]} transform>
            <div className="px-3 py-1.5 rounded-full border border-white/20 bg-background/50 backdrop-blur-md shadow-2xl flex items-center justify-center pointer-events-none select-none">
              <span className="font-heading font-bold text-[10px] tracking-wider uppercase text-foreground whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full inline-block mr-2" style={{ backgroundColor: badge.color }} />
                {badge.text}
              </span>
            </div>
          </Html>
        </Float>
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// 3. Subtle Financial Data Lines (Background)
// -------------------------------------------------------------
function DataLines() {
  const lines = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      const points = [];
      const z = -3 - Math.random() * 5;
      const yOffset = (Math.random() - 0.5) * 8;
      
      let currentY = yOffset;
      for (let x = -10; x <= 10; x += 2) {
        // Upward trending math mimicking financial charts but abstract
        currentY += Math.random() * 0.8 - 0.2; 
        points.push(new THREE.Vector3(x, currentY, z));
      }
      arr.push(points);
    }
    return arr;
  }, []);

  return (
    <group>
      {lines.map((pts, i) => (
        <Line 
          key={i} 
          points={pts} 
          color="#d4a44d" 
          lineWidth={1} 
          opacity={0.1 + Math.random() * 0.2} 
          transparent 
        />
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// Mouse Parallax Rig
// -------------------------------------------------------------
function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    // Smooth camera movement based on mouse position
    camera.position.lerp(vec.set(mouse.x * 1.5, mouse.y * 1.5, 6), 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// -------------------------------------------------------------
// Main Scene Component
// -------------------------------------------------------------
export default function Scene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <div className="absolute inset-0 w-full h-[800px] -z-10 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]} // Limit DPR to 2 for performance
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[isDark ? "#050B18" : "#f8fafc"]} />
        <fog attach="fog" args={[isDark ? "#050B18" : "#f8fafc", 5, 15]} />
        
        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.2 : 0.8} />
        <directionalLight position={[5, 5, 5]} intensity={isDark ? 1 : 2} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={isDark ? 0.5 : 1} color="#d4a44d" />
        
        {/* Abstract Elements */}
        <CenterOrb />
        <OrbitingBadges />
        <DataLines />
        
        {/* Subtle Dust/Sparkles */}
        <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.1} color={isDark ? "#ffffff" : "#071A35"} />

        {/* Dynamic Shadows */}
        <ContactShadows resolution={256} scale={10} blur={2} opacity={isDark ? 0.4 : 0.1} far={10} color="#000000" />
        
        {/* Environmental Reflections */}
        <Environment preset={isDark ? "night" : "city"} />
        
        {/* Camera Rig for Mouse Parallax */}
        <CameraRig />
      </Canvas>
    </div>
  );
}
