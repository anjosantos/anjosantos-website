import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { GridPages, GridPage, FloatingWrapper } from "@/components";
import { Star, Shoe, Box } from "@/components/three-d";

useGLTF.preload("/nike.glb");

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
        <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 75 }}>
          <Environment
            files="/nebulae2.hdr"
            background
            environmentIntensity={0.5}
            backgroundIntensity={1}
          />

          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
          <OrbitControls makeDefault />
          <group>
            <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
          </group>

          {Array.from({ length: 200 }).map((_, i) => (
            <Star key={i} />
          ))}
          <EffectComposer>
            <Bloom
              mipmapBlur
              luminanceThreshold={0.5}
              luminanceSmoothing={0.03}
              intensity={2}
            />
          </EffectComposer>
        </Canvas>
      </section>
      <FloatingWrapper
        style={{
          marginTop: 500,
          marginLeft: "50%",
          padding: 500,
          color: "red",
          position: "relative",
          transform: "translate(-50%, -50%)",
          display: "inline-block",
        }}
      >
        <span>ANJOSANTOS.DEV</span>
      </FloatingWrapper>
      <GridPages rows={8} columns={5} gridPages={pages} activeKey={activeKey} />
    </>
  );
};

export default Home;
