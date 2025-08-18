import React, { useState, useEffect, type JSX } from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, useProgress } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { useLoading } from "@/providers";
import { GridPages } from "@/components";
import { Star } from "@/components/three-d";
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  ContactPage,
  PAGE_KEYS,
} from "@/pages/grid-pages";

useGLTF.preload("/astronaut.glb");

const Home: React.FC = () => {
  const { loadingContext } = useLoading();
  const { setIsLoading } = loadingContext;
  const [activeKey, setActiveKey] = useState<string>(PAGE_KEYS.HOME);
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const { progress } = useProgress();

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, (_, i) => <Star key={i} />);
    setStars(newStars);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setIsLoading(false);
    }
  }, [progress]);

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
            backgroundIntensity={2}
          />
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
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
    </>
  );
};

export default Home;
