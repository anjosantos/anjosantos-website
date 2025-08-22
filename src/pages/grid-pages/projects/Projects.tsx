import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "@/components/three-d";

import { GridPage, PageHeader, Container, ContainerPanel } from "@/components";
import ContainerParagraph from "@/components/container/paragraph";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <GridPage>
      <section
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <section
          style={{
            flex: 3,
            height: "100vh",
            position: "relative",
            display: "flex",
          }}
        >
          <section
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "400px",
              width: "500px",
              flex: 1,
            }}
          >
            <Container>
              <ContainerPanel
                label="ScoutBees"
                pills={["Python/Django", "ReactJS", "TypeScript"]}
              />
              <ContainerParagraph body="ScoutBees is a platform that connects beekeepers with local businesses." />
            </Container>
          </section>
        </section>
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
        <section
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <PageHeader label="Projects" />
        </section>
      </section>
    </GridPage>
  );
};

export default Projects;
