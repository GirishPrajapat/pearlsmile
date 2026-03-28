"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ToothModel from "./ToothModel";

export default function ToothCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      style={{ background: "transparent" }}
      shadows
    >
      <ambientLight intensity={2} />
      <pointLight position={[4, 6, 4]} color="#FFFFFF" intensity={6} />
      <pointLight position={[-4, 3, -2]} color="#FFF0F5" intensity={3} />
      <pointLight position={[0, -3, 3]} color="#FFF5F0" intensity={2} />
      <directionalLight
        position={[2, 8, 4]}
        intensity={2}
        castShadow
      />
      <Environment preset="studio" />
      <ToothModel />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </Canvas>
  );
}
