import React from "react";

import { GridPage } from "@/components";
import { PAGE_KEYS } from "../pageKeys";

type HomeProps = {
  setActiveKey: (key: string) => void;
};

const Home: React.FC<HomeProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <button onClick={() => setActiveKey(PAGE_KEYS.PROJECTS)}>PROJECTS</button>
      <button onClick={() => setActiveKey(PAGE_KEYS.ABOUT)}>ABOUT</button>
      <button onClick={() => setActiveKey(PAGE_KEYS.CONTACT)}>CONTACT</button>
      <h1 style={{ color: "white" }}>Sample Home</h1>
      <p style={{ color: "white" }}>
        This is the Home page of the application.
      </p>
    </GridPage>
  );
};

export default Home;
