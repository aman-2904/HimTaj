// components/Home/CollectionsRing.jsx
"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Ring3D = ({ scrollY }) => {
  const meshRef = useRef();

  // Load your .glb file (place it in public folder or import it)
  const { scene } = useGLTF("/ring.glb"); // path to your GLB

  // Map scrollY to rotation and vertical position
  const rotation = scrollY * 0.02; // adjust speed
  const yPos = Math.max(0, 5 - scrollY * 0.01); // move up as scroll increases

  useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5;
      child.material.roughness = 0.5;
    }
  });
}, [scene]);


  return (
   
  <primitive
  ref={meshRef}
  object={scene}
  position={[0, yPos, 0]}
  rotation={[0, rotation, 0]}
  scale={[1, 1, 1]}
  castShadow
  receiveShadow
/>

  );
};

export default function CollectionsRing() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offset = -rect.top; // distance scrolled inside container
      setScrollY(offset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white h-[200vh] w-full flex flex-col items-center justify-start pt-40"
    >
      {/* Fixed Text */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-5xl font-bold mb-4">Collections</h1>
        <p className="text-lg max-w-xl">
          Explore our exclusive 3D ring collections. Scroll down to see the magic!
        </p>
      </div>

      {/* Canvas for 3D Ring */}
      <div className="absolute top-[400px] w-full h-[500px]">
        
<Canvas shadows linear>
  <ambientLight intensity={0.8} />
  <directionalLight
    position={[5, 5, 5]}
    intensity={1}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
  />
  <Ring3D scrollY={scrollY} />
  <OrbitControls enableZoom={false} enablePan={false} />
</Canvas>
      </div>
    </div>
  );
}
