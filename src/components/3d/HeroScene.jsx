import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ── Floating particles ─────────────────────────────────────────────────────
function Particles({ count = 120 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#e2e8f0"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

// ── Wireframe torus knot that tracks mouse ─────────────────────────────────
function TorusKnot({ mouse }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.12;

    // Soft parallax toward mouse
    meshRef.current.position.x +=
      (mouse.current[0] * 0.6 - meshRef.current.position.x) * 0.04;
    meshRef.current.position.y +=
      (mouse.current[1] * 0.4 - meshRef.current.position.y) * 0.04;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.1, 0.32, 120, 18]} />
      <meshBasicMaterial
        color="#e2e8f0"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

// ── Secondary icosahedron ──────────────────────────────────────────────────
function Icosahedron({ mouse }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.09;
    ref.current.rotation.z += delta * 0.07;

    ref.current.position.x +=
      (-mouse.current[0] * 1.4 - ref.current.position.x) * 0.03;
    ref.current.position.y +=
      (-mouse.current[1] * 1.0 - ref.current.position.y) * 0.03;
  });

  return (
    <mesh ref={ref} position={[3.2, -1.2, -2]}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshBasicMaterial
        color="#e2e8f0"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

// ── Mouse tracker ──────────────────────────────────────────────────────────
function MouseTracker({ mouse }) {
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    mouse.current[0] = pointer.x * viewport.width * 0.5;
    mouse.current[1] = pointer.y * viewport.height * 0.5;
  });

  return null;
}

// ── Scene root ─────────────────────────────────────────────────────────────
function Scene() {
  const mouse = useRef([0, 0]);

  return (
    <>
      <MouseTracker mouse={mouse} />
      <Particles count={140} />
      <TorusKnot mouse={mouse} />
      <Icosahedron mouse={mouse} />
    </>
  );
}

// ── Exported island component ──────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  );
}
