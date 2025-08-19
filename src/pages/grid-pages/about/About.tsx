import React from "react";

import { GridPage } from "@/components";
import { PageKeys } from "../pageKeys";

type AboutProps = {
  setActiveKey: (key: string) => void;
};

const About: React.FC<AboutProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <section>
        <button onClick={() => setActiveKey(PageKeys.HOME)}>Back</button>
        <h1>Sample About</h1>
        <p>This is the About page of the application.</p>

      </section>
    </GridPage>
  );
};

export default About;
