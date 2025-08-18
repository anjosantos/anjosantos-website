import React from "react";

import { GridPage } from "@/components";
import { PAGE_KEYS } from "../pageKeys";

type AboutProps = {
  setActiveKey: (key: string) => void;
};

const About: React.FC<AboutProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <section>
        <button onClick={() => setActiveKey(PAGE_KEYS.HOME)}>Back</button>
        <h1>Sample About</h1>
        <p>This is the About page of the application.</p>

      </section>
    </GridPage>
  );
};

export default About;
