import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "@/components/three-d";

import { GridPage } from "@/components";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <GridPage>
      <section style={{ display: "flex", flexDirection: "row" }}>
        <section style={{ flex: 3, height: "100vh" }}></section>
        <section
          style={{
            flex: 2.5,
            height: "100vh",
          }}
        >
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={1}
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
            <Laptop position={[0, -1, 0]} rotation={[0.5, 1.2, 0]} />
          </Canvas>
        </section>
      </section>
    </GridPage>
  );
};

export default Projects;
