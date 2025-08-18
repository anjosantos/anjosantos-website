import { useRef } from "react";
import * as THREE from "three";

import { useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";

const Astronaut = (props: any) => {
  const ref = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/astronaut.glb");
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
        scale={1}
        receiveShadow
        castShadow
        //@ts-ignore
        geometry={nodes.Astronaut_mesh.geometry}
        //@ts-ignore
        material={materials.Astronaut_mat}
        rotation={[0.3, Math.PI / 1.6, 0]}
        {...props}
      />
    </group>
  );
};

export default Astronaut;
