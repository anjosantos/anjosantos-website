import React, { useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  MeshTransmissionMaterial,
} from "@react-three/drei";

import { GridPages, GridPage } from "@/components";

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
        geometry={nodes.defaultMaterial.geometry}
        material={materials.NikeShoe}
        {...props}
      />
    </group>
  );
};

useGLTF.preload("/nike.glb");

const Box = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 3) / 4,
      0.15 + Math.sin(t / 2) / 8
    );
    meshRef.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      receiveShadow
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
    </mesh>
  );
};

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("page-1");
  const pages = [
    {
      key: "page-1",
      rowIndex: 5,
      columnIndex: 6,
      content: (
        <GridPage>
          Page 1
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
        </GridPage>
      ),
    },
    {
      key: "page-2",
      rowIndex: 0,
      columnIndex: 0,
      content: (
        <GridPage>
          Page 2
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
        </GridPage>
      ),
    },
    {
      key: "page-3",
      rowIndex: 8,
      columnIndex: 5,
      content: (
        <GridPage>
          Page 3
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <OrbitControls makeDefault />
            <Box position={[-3.2, 0, 0]} />
            <Box position={[3.2, 0, 0]} />
          </Canvas>
        </GridPage>
      ),
    },
    {
      key: "page-4",
      rowIndex: 4,
      columnIndex: 1,
      content: (
        <GridPage>
          Page 4
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
        </GridPage>
      ),
    },
  ];

  return (
    <>
      <section
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
          <Environment preset="city" background blur={1} />
          <mesh scale={1} position={[0, 0, 0.5]}>
            <boxGeometry args={[16, 7, 1]} />
            {/* <circleGeometry args={[1, 64, 64]} /> */}
            <MeshTransmissionMaterial
              color="#7d7d7dff"
              samples={16}
              resolution={512}
              anisotropicBlur={0.1}
              thickness={0.1}
              roughness={1}
              toneMapped={true}
            />
          </mesh>
          {/* <OrbitControls makeDefault /> */}
          <group>
            <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
          </group>
        </Canvas>
      </section>
      <GridPages rows={8} columns={5} gridPages={pages} activeKey={activeKey} />
    </>
  );
};

export default Home;
