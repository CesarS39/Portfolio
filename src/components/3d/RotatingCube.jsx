import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube({ mouse }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshBasicMaterial color="#e2e8f0" wireframe transparent opacity={0.22} />
    </mesh>
  );
}

function Ring() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.z += delta * 0.15;
    ref.current.rotation.x += delta * 0.08;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.012, 8, 60]} />
      <meshBasicMaterial color="#e2e8f0" transparent opacity={0.1} />
    </mesh>
  );
}

export default function RotatingCube() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <Cube />
      <Ring />
    </Canvas>
  );
}
