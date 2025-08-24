import React, { useState, useEffect, type JSX } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { usePage } from "@/providers";
import { GridPages, LoadingChecker } from "@/components";
import { Star } from "@/components/three-d";
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  ContactPage,
  PageKeys,
} from "@/pages/grid-pages";

useGLTF.preload("/three_d/astronaut.glb");
useGLTF.preload("/three_d/macbook_pro_2021.glb");

type ThreeJSCameraOptions = {
  position: [number, number, number];
  fov: number;
};

const Home: React.FC = () => {
  const { pageContext } = usePage();
  const { activeKey, setActiveKey } = pageContext;

  const [cameraSettings, setCameraSettings] = useState<ThreeJSCameraOptions>({
    position: [0, 0, 4],
    fov: 75,
  });
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, (_, i) => <Star key={i} />);
    setStars(newStars);
  }, []);

  useEffect(() => {
    if (activeKey === PageKeys.HOME) {
      setCameraSettings({
        position: [0, 0, 4],
        fov: 75,
      });
    } else if (activeKey === PageKeys.PROJECTS) {
      setCameraSettings({
        position: [10, 0, 4],
        fov: 15,
      });
    } else if (activeKey === PageKeys.ABOUT) {
      setCameraSettings({
        position: [10, 0, 4],
        fov: 25,
      });
    } else if (activeKey === PageKeys.CONTACT) {
      setCameraSettings({
        position: [10, 10, 4],
        fov: 55,
      });
    }
  }, [activeKey]);

  const pages = [
    {
      key: PageKeys.HOME,
      rowIndex: 2,
      columnIndex: 2,
      content: <HomePage setActiveKey={setActiveKey} />,
    },
    {
      key: PageKeys.PROJECTS,
      rowIndex: 3,
      columnIndex: 0,
      content: <ProjectsPage />,
    },
    {
      key: PageKeys.ABOUT,
      rowIndex: 5,
      columnIndex: 5,
      content: <AboutPage />,
    },
    {
      key: PageKeys.CONTACT,
      rowIndex: 0,
      columnIndex: 4,
      content: <ContactPage />,
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
          <React.Suspense fallback={null}>
            <CameraRig position={cameraSettings.position} />
            <Environment
              files="/three_d/nebulae2.hdr"
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
            <LoadingChecker />
          </React.Suspense>
        </Canvas>
      </section>
      <GridPages rows={5} columns={5} gridPages={pages} activeKey={activeKey} />
    </>
  );
};

export default Home;
