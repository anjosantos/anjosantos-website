import React from "react";

import { GridPage } from "@/components";
import { PAGE_KEYS } from "../pageKeys";

import { Canvas } from "@react-three/fiber";
import { Astronaut } from "@/components/three-d";

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
        <section style={{ flex: 2, height: "100vh" }}>
          <button onClick={() => setActiveKey(PAGE_KEYS.PROJECTS)}>
            PROJECTS
          </button>
          <button onClick={() => setActiveKey(PAGE_KEYS.ABOUT)}>ABOUT</button>
          <button onClick={() => setActiveKey(PAGE_KEYS.CONTACT)}>
            CONTACT
          </button>
          <h1 style={{ color: "white" }}>Sample Home</h1>
          <p style={{ color: "white" }}>
            This is the Home page of the application.
          </p>
        </section>
      </section>
    </GridPage>
  );
};

export default Home;
