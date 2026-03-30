"use client";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ToothModel() {
  const { scene } = useGLTF("/models/tooth.glb");
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetRot = useRef({ x: 0, y: 0 });

  useEffect(() => {
  if (!scene) return;

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;

      if (!mesh.userData.isModified) {
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: "#F8F6F2",
          roughness: 0.05,
          metalness: 0.0,
          transmission: 0.08,
          thickness: 1.2,
          reflectivity: 1.0,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          ior: 1.48,
        });

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.userData.isModified = true; // 🔥 prevents re-application
      }
    }
  });
}, [scene]);


  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Gentle float
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.12;

    // Mouse parallax tilt
    targetRot.current.x += (mouse.current.y * 0.3 - targetRot.current.x) * 0.05;
    targetRot.current.y += (mouse.current.x * 0.5 - targetRot.current.y) * 0.05;
    groupRef.current.rotation.x = targetRot.current.x;
    groupRef.current.rotation.y = targetRot.current.y;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={2} />
    </group>
  );
}

useGLTF.preload("/models/tooth.glb");
