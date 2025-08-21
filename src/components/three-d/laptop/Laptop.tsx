import { useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useGLTF } from "@react-three/drei";

const Laptop = (props: any) => {
  const ref = useRef<THREE.Group>(null!);
  const { nodes, materials, scene } = useGLTF("/macbook_pro_2021.glb");
  const texture = useLoader(TextureLoader, "/space.jpg");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 3) / 4,
      0.15 + Math.sin(t / 2) / 8
    );
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });

  return (
    <group {...props}>
      <group ref={ref}>
        <primitive object={scene} scale={10} />;
        <mesh position={[1.25, 1.327, 0]} rotation={[0, 1.57, 0]}>
          <boxGeometry args={[3.44, 2.06, 0.005]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
};

export default Laptop;
