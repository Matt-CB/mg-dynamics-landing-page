import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { NetworkGraph, DataGlobe, FinalEarth } from './CanvasElements';
import * as THREE from 'three';
import { scrollState } from '../store';

function BackgroundColorAnimator() {
  useFrame(({ scene }) => {
    let targetColor = '#F5F5F7';
    
    let isDark = false;
    const valuesSection = document.getElementById('values-section');

    if (valuesSection) {
      const valRect = valuesSection.getBoundingClientRect();
      
      // Start turning black when ValuesSection comes in, stay black until it leaves
      if (valRect.top <= window.innerHeight * 0.65 && valRect.bottom >= window.innerHeight * 0.35) {
        isDark = true;
      }
    }
    
    if (isDark) {
      targetColor = '#000000';
    }

    if (scene.background instanceof THREE.Color) {
      scene.background.lerp(new THREE.Color(targetColor), 0.05);
    } else {
      scene.background = new THREE.Color(targetColor);
    }
  });
  return null;
}

export function CanvasBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 2]} // limit pixel ratio for performance
      gl={{ antialias: true, alpha: false }}
    >
      <BackgroundColorAnimator />
      <ambientLight intensity={1} />
      <NetworkGraph />
      <DataGlobe />
      <FinalEarth />
      
      {/* Optional fog that fades with background color could be added here */}
    </Canvas>
  );
}
