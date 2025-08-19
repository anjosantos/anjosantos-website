import React from "react";

import { GridPage } from "@/components";
import { PageKeys } from "../pageKeys";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "@/components/three-d";

type ProjectsProps = {
  setActiveKey: (key: string) => void;
};

const Projects: React.FC<ProjectsProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <section>
        <button onClick={() => setActiveKey(PageKeys.HOME)}>Back</button>
        <h1>Sample Projects</h1>
        <p>This is the Projects page of the application.</p>
      </section>

      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <OrbitControls makeDefault />
        <Box position={[-3.2, 0, 0]} />
        <Box position={[3.2, 0, 0]} />
      </Canvas>
    </GridPage>
  );
};

export default Projects;
