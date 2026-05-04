import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { scrollState } from '../store';

const PARTICLE_COUNT = 800;

export function NetworkGraph() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate random points in a vertical column
  const { positions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const orig = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Column shape: x, z small. y large range.
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 40; // Tall
      const z = (Math.random() - 0.5) * 6;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return { positions: pos, originalPositions: orig };
  }, []);

  const indices = useMemo(() => {
    // Generate some random lines between close neighbors
    const idx = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 2.5) {
          idx.push(i, j);
        }
      }
    }
    return new Uint16Array(idx);
  }, [positions]);

  useFrame((state, delta) => {
    const p = scrollState.progress;

    // Movement logic based on scroll progress
    if (pointsRef.current && linesRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        // Float softly based on time
        const timeOffset = state.clock.elapsedTime * 0.4 + i;
        const driftX = Math.sin(timeOffset) * 0.8;
        const driftY = Math.cos(timeOffset * 0.8) * 0.8;
        const driftZ = Math.cos(timeOffset) * 0.8;

        pos[i3] = originalPositions[i3] + driftX;
        pos[i3 + 1] = originalPositions[i3 + 1] + driftY;
        pos[i3 + 2] = originalPositions[i3 + 2] + driftZ;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.position = pointsRef.current.geometry.attributes.position;
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Move the entire shape up as we scroll
      pointsRef.current.position.y = p * 15;
      linesRef.current.position.y = p * 15;

      // Color inversion based on dark mode section
      let isDark = false;
      const valuesSection = document.getElementById('values-section');
      if (valuesSection) {
        const valRect = valuesSection.getBoundingClientRect();
        if (valRect.top <= window.innerHeight * 0.65 && valRect.bottom >= window.innerHeight * 0.35) {
          isDark = true;
        }
      }
      
      const targetColor = isDark ? '#ffffff' : '#111111';
      const targetLineColor = isDark ? '#555555' : '#dddddd'; // darker line color for dark mode looks better
      
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      const lmat = linesRef.current.material as THREE.LineBasicMaterial;
      mat.color.lerp(new THREE.Color(targetColor), 0.05);
      lmat.color.lerp(new THREE.Color(targetLineColor), 0.05);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.16} color="#111111" transparent opacity={0.5} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="index"
            count={indices.length}
            array={indices}
            itemSize={1}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#dddddd" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

export function DataGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  
  const { positions, indices } = useMemo(() => {
    const GLOBE_POINTS = 600;
    const pos = new Float32Array(GLOBE_POINTS * 3);
    const radius = 5;
    
    // Distribute points on sphere using fibonacci
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < GLOBE_POINTS; i++) {
        const y = 1 - (i / (GLOBE_POINTS - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;

        pos[i*3] = Math.cos(theta) * r * radius;
        pos[i*3+1] = y * radius;
        pos[i*3+2] = Math.sin(theta) * r * radius;
    }

    const idx = [];
    for (let i = 0; i < GLOBE_POINTS; i++) {
      for (let j = i + 1; j < GLOBE_POINTS; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.0) {
          idx.push(i, j);
        }
      }
    }

    return { positions: pos, indices: new Uint16Array(idx) };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const p = scrollState.progress;
      // Fade in and out based on progress
      const isVisible = p > 0.1 && p < 0.65;
      
      // Position the globe on the right side
      groupRef.current.position.x = 6;
      groupRef.current.position.y = - (p * 10) + 2; 

      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      const mat = (groupRef.current.children[0] as THREE.Points).material as THREE.PointsMaterial;
      const lmat = (groupRef.current.children[1] as THREE.LineSegments).material as THREE.LineBasicMaterial;
      
      let isDark = false;
      const valuesSection = document.getElementById('values-section');
      if (valuesSection) {
        const valRect = valuesSection.getBoundingClientRect();
        if (valRect.top <= window.innerHeight * 0.65 && valRect.bottom >= window.innerHeight * 0.35) {
          isDark = true;
        }
      }

      const targetColor = isDark ? '#ffffff' : '#111111';
      const targetLineColor = isDark ? '#555555' : '#dddddd';

      mat.color.lerp(new THREE.Color(targetColor), 0.05);
      lmat.color.lerp(new THREE.Color(targetLineColor), 0.05);
      
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, isVisible ? 0.8 : 0, 0.05);
      lmat.opacity = THREE.MathUtils.lerp(lmat.opacity, isVisible ? 0.3 : 0, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#aaaaaa" transparent opacity={0} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="index" count={indices.length} array={indices} itemSize={1} />
        </bufferGeometry>
        <lineBasicMaterial color="#eeeeee" transparent opacity={0} />
      </lineSegments>
    </group>
  );
}

export function FinalEarth() {
  const groupRef = useRef<THREE.Group>(null);
  
  const { positions, indices } = useMemo(() => {
    // We basically make a large sphere and position it very low
    const GLOBE_POINTS = 1200;
    const pos = new Float32Array(GLOBE_POINTS * 3);
    const radius = 15; // large radius
    
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < GLOBE_POINTS; i++) {
        const y = 1 - (i / (GLOBE_POINTS - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;

        pos[i*3] = Math.cos(theta) * r * radius;
        pos[i*3+1] = y * radius;
        pos[i*3+2] = Math.sin(theta) * r * radius;
    }

    const idx = [];
    for (let i = 0; i < GLOBE_POINTS; i++) {
      for (let j = i + 1; j < GLOBE_POINTS; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.8) {
          idx.push(i, j);
        }
      }
    }

    return { positions: pos, indices: new Uint16Array(idx) };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const p = scrollState.progress;
      const active = p > 0.75;
      
      const mat = (groupRef.current.children[0] as THREE.Points).material as THREE.PointsMaterial;
      const lmat = (groupRef.current.children[1] as THREE.LineSegments).material as THREE.LineBasicMaterial;
      
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, active ? 0.6 : 0, 0.05);
      lmat.opacity = THREE.MathUtils.lerp(lmat.opacity, active ? 0.2 : 0, 0.05);

      // Curve rising up slightly as we scroll to bottom
      groupRef.current.position.y = -20 + (p - 0.75) * 10;
      // Rotate slowly
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.rotation.z = Math.PI / 8;
    }
  });

  return (
    <group ref={groupRef} position={[0, -20, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#000000" transparent opacity={0} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="index" count={indices.length} array={indices} itemSize={1} />
        </bufferGeometry>
        <lineBasicMaterial color="#333333" transparent opacity={0} />
      </lineSegments>
    </group>
  );
}
