import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Dancing from './Dancing'
import { OrbitControls } from "@react-three/drei/OrbitControls";
import "./index.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Dancing />
      </Suspense>
    </Canvas>
  );
}
