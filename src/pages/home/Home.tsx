import React, { useState, useEffect, type JSX } from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { GridPages, FloatingWrapper } from "@/components";
import { Star, Shoe } from "@/components/three-d";
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  ContactPage,
  PAGE_KEYS,
} from "@/pages/grid-pages";

useGLTF.preload("/nike.glb");

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(PAGE_KEYS.HOME);
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, (_, i) => <Star key={i} />);
    setStars(newStars);
  }, []);

  const pages = [
    {
      key: PAGE_KEYS.HOME,
      rowIndex: 2,
      columnIndex: 2,
      content: <HomePage setActiveKey={setActiveKey} />,
    },
    {
      key: PAGE_KEYS.PROJECTS,
      rowIndex: 3,
      columnIndex: 0,
      content: <ProjectsPage setActiveKey={setActiveKey} />,
    },
    {
      key: PAGE_KEYS.ABOUT,
      rowIndex: 5,
      columnIndex: 5,
      content: <AboutPage setActiveKey={setActiveKey} />,
    },
    {
      key: PAGE_KEYS.CONTACT,
      rowIndex: 0,
      columnIndex: 4,
      content: <ContactPage setActiveKey={setActiveKey} />,
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

          {stars.map((star) => (
            <Star key={star.key} />
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
      <GridPages rows={5} columns={5} gridPages={pages} activeKey={activeKey} />
      <FloatingWrapper
        style={{
          color: "red",
          position: "absolute",
          display: "inline-block",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span>ANJOSANTOS.DEV</span>
      </FloatingWrapper>
    </>
  );
};

export default Home;
