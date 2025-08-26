import React from "react";

import { GridPage, FloatingWrapper } from "@/components";
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
            <React.Suspense fallback={null}>
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
            </React.Suspense>
          </Canvas>

          <section className="chat-bubble-container">
            <FloatingWrapper>
              <div className="chat-bubble">
                Hi! I’m <strong>ANJO</strong>! As a kid, I dreamed of being an
                astronaut and wanted to fly to space. Now, I launch code instead
                of rockets ✨🚀.
              </div>
            </FloatingWrapper>
          </section>
        </section>
        <section className="home-menu-container">
          <section className="home-menu-transform-container">
            <button className="menu-button transition" onClick={() => {}}>
              <span className="menu-page-number">01</span>HOME
            </button>
            <button
              className="menu-button transition active"
              onClick={() => setActiveKey(PageKeys.PROJECTS)}
            >
              <span className="menu-page-number">02</span>PROJECTS
            </button>
            <button
              className="menu-button transition active"
              onClick={() => setActiveKey(PageKeys.ABOUT)}
            >
              <span className="menu-page-number">03</span>ABOUT
            </button>
            <button
              className="menu-button transition active"
              onClick={() => setActiveKey(PageKeys.CONTACT)}
            >
              <span className="menu-page-number">04</span>CONTACT
            </button>
          </section>
        </section>
      </section>
    </GridPage>
  );
};

export default Home;
