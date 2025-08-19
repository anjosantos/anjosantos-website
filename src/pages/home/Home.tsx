import React, { useState, useEffect, type JSX, act } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
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

type ThreeJSCameraOptions = {
  position: [number, number, number];
  fov: number;
};

const Home: React.FC = () => {
  const { loadingContext } = useLoading();
  const { setIsLoading } = loadingContext;

  const [activeKey, setActiveKey] = useState<string>(PAGE_KEYS.HOME);
  const [cameraSettings, setCameraSettings] = useState<ThreeJSCameraOptions>({
    position: [0, 0, 4],
    fov: 75,
  });
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

  useEffect(() => {
    if (activeKey === PAGE_KEYS.HOME) {
      setCameraSettings({
        position: [0, 0, 4],
        fov: 75,
      });
    } else if (activeKey === PAGE_KEYS.PROJECTS) {
      setCameraSettings({
        position: [10, 0, 4],
        fov: 15,
      });
    } else if (activeKey === PAGE_KEYS.ABOUT) {
      setCameraSettings({
        position: [10, 0, 4],
        fov: 25,
      });
    } else if (activeKey === PAGE_KEYS.CONTACT) {
      setCameraSettings({
        position: [10, 10, 4],
        fov: 55,
      });
    }
  }, [activeKey]);

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

  const CameraRig = ({
    position: [x, y, z],
  }: {
    position: [number, number, number];
  }) => {
    useFrame((state) => {
      state.camera.position.lerp({ x, y, z }, 0.1);
      state.camera.lookAt(0, 0, 0);
    });
    return <></>;
  };

  return (
    <>
      <section
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Canvas eventPrefix="client">
          <CameraRig position={cameraSettings.position} />
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
