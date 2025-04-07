
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

// Simple 3D model component
const SteelFrameModel = () => {
  const meshRef = useRef<Mesh>(null);
  
  // Animation frame
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <group>
      {/* Steel beam vertical */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 4, 0.5]} />
        <meshStandardMaterial attach="material" color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Steel beam horizontal */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[4, 0.5, 0.5]} />
        <meshStandardMaterial attach="material" color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Steel beam diagonal */}
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[3, 0.3, 0.3]} />
        <meshStandardMaterial attach="material" color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

const ModelViewer: React.FC = () => {
  return (
    <div className="absolute right-10 bottom-0 h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] pointer-events-none">
      <Canvas camera={{ position: [4, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SteelFrameModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
