import React from "react";

import { GridPage } from "@/components";
import { PageKeys } from "../pageKeys";

import { Canvas } from "@react-three/fiber";
import { Astronaut } from "@/components/three-d";

import "./home.css";

type HomeProps = {
  setActiveKey: (key: string) => void;
};

const Home: React.FC<HomeProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <section className="home-container">
        <section className="home-canvas-container">
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
            <Astronaut scale={1.1} position={[-1.5, -2.2, 0]} />
          </Canvas>
        </section>
        <section className="home-menu-container">
          <section className="home-menu-transform-container">
            <button className="menu-button transition" onClick={() => {}}>
              HOME
            </button>
            <button
              className="menu-button transition active"
              onClick={() => setActiveKey(PageKeys.PROJECTS)}
            >
              PROJECTS
            </button>
            <button
              className="menu-button transition active"
              onClick={() => setActiveKey(PageKeys.ABOUT)}
            >
              ABOUT
            </button>
            <button
              className="menu-button transition active"
              onClick={() => setActiveKey(PageKeys.CONTACT)}
            >
              CONTACT
            </button>
          </section>
        </section>
      </section>
    </GridPage>
  );
};

export default Home;
