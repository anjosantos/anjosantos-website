import React from "react";

import { GridPage } from "@/components";
import { PAGE_KEYS } from "../pageKeys";

import { Canvas } from "@react-three/fiber";
import { Astronaut } from "@/components/three-d";

import "./Home.css";

type HomeProps = {
  setActiveKey: (key: string) => void;
};

const Home: React.FC<HomeProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <section style={{ display: "flex", flexDirection: "row" }}>
        <section style={{ flex: 3, height: "100vh" }}>
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
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            height: "100vh",
            justifyContent: "center",
            transform: "perspective(25vw) rotateY(-45deg)",
            position: "relative",
            right: "15vw",
          }}
        >
          <button className="menu-button" onClick={() => {}}>
            HOME
          </button>
          <button
            className="menu-button active"
            onClick={() => setActiveKey(PAGE_KEYS.PROJECTS)}
          >
            PROJECTS
          </button>
          <button
            className="menu-button active"
            onClick={() => setActiveKey(PAGE_KEYS.ABOUT)}
          >
            ABOUT
          </button>
          <button
            className="menu-button active"
            onClick={() => setActiveKey(PAGE_KEYS.CONTACT)}
          >
            CONTACT
          </button>
        </section>
      </section>
    </GridPage>
  );
};

export default Home;
