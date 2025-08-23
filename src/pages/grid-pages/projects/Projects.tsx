import React, { useState, useCallback, useEffect } from "react";

import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "@/components/three-d";
import { TextureLoader } from "three";

import { GridPage, PageHeader, Container, ContainerPanel } from "@/components";
import ContainerParagraph from "@/components/container/paragraph";

import "./projects.css";

type ProjectsProps = {};

enum ProjectKeys {
  SCOUTBEES = "scoutbees",
  BUKIDFRESH = "bukidfresh",
  GEMHEAD = "gemhead",
}

type Project = {
  key: ProjectKeys;
  label: string;
  pills: string[];
  body: string;
};

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [projects] = useState<Project[]>([
    {
      key: ProjectKeys.SCOUTBEES,
      label: "ScoutBees",
      pills: ["Python", "Django", "ReactJS", "TypeScript"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
    {
      key: ProjectKeys.BUKIDFRESH,
      label: "BukidFresh",
      pills: ["Python", "Django", "ReactJS", "TypeScript"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
    {
      key: ProjectKeys.GEMHEAD,
      label: "Gemhead",
      pills: ["PHP", "Laravel", "MySQL"],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
  ]);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const scoutBeesTexture = useLoader(TextureLoader, "/scoutbees-page.png");
  const bukidFreshTexture = useLoader(TextureLoader, "/bukidfresh-page.png");
  const gemheadTexture = useLoader(TextureLoader, "/gemhead-page.png");
  const [selectedTexture, setSelectedTexture] =
    useState<THREE.Texture>(scoutBeesTexture);

  const onNext = useCallback(() => {
    setSelectedProject((prevProject) => {
      const currentIndex = projects.findIndex((p) => p.key === prevProject.key);
      const nextIndex = (currentIndex + 1) % projects.length;
      return projects[nextIndex];
    });
  }, []);

  const onPrevious = useCallback(() => {
    setSelectedProject((prevProject) => {
      const currentIndex = projects.findIndex((p) => p.key === prevProject.key);
      const previousIndex =
        (currentIndex - 1 + projects.length) % projects.length;
      return projects[previousIndex];
    });
  }, []);
  useEffect(() => {
    switch (selectedProject.key) {
      case ProjectKeys.SCOUTBEES:
        setSelectedTexture(scoutBeesTexture);
        break;
      case ProjectKeys.BUKIDFRESH:
        setSelectedTexture(bukidFreshTexture);
        break;
      case ProjectKeys.GEMHEAD:
        setSelectedTexture(gemheadTexture);
        break;
    }
  }, [selectedProject.key]);

  return (
    <GridPage>
      <section className="projects-container">
        <section className="projects-left-container">
          <section className="projects-panel-container">
            <Container>
              <ContainerPanel
                label={selectedProject.label}
                pills={selectedProject.pills}
                onNext={onNext}
                onPrevious={onPrevious}
              />
              <ContainerParagraph body={selectedProject.body} />
            </Container>
          </section>
        </section>
        <section className="projects-right-container">
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
            <Laptop
              texture={selectedTexture}
              position={[0, -1, 0]}
              rotation={[0.5, 1.2, 0]}
            />
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
