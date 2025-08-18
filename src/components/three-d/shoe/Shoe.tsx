import { useRef } from "react";
import * as THREE from "three";

import { useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";

const Shoe = (props: any) => {
  const ref = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/nike.glb");
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
    <group ref={ref}>
      <mesh
        receiveShadow
        castShadow
        //@ts-ignore
        geometry={nodes.defaultMaterial.geometry}
        material={materials.NikeShoe}
        {...props}
      />
    </group>
  );
};

export default Shoe;
