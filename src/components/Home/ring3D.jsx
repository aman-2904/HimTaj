"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function DiamondRingModel() {
  const { scene } = useGLTF("/ring.glb"); // put ring.glb in /public/models/
  return <primitive object={scene} scale={2} />;
}

export default function DiamondRing() {
  return (
    <div className="w-full h-screen relative bg-white">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 15, 10]} intensity={2} />
        <DiamondRingModel />
        <Environment preset="studio" /> {/* Reflections */}
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
}
