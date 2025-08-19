import React from "react";

import { GridPage } from "@/components";
import { PageKeys } from "../pageKeys";

type ContactProps = {
  setActiveKey: (key: string) => void;
};

const Contact: React.FC<ContactProps> = ({ setActiveKey }) => {
  return (
    <GridPage>
      <section>
        <button onClick={() => setActiveKey(PageKeys.HOME)}>Back</button>
        <h1>Sample Contact</h1>
        <p>This is the Contact page of the application.</p>
      </section>
    </GridPage>
  );
};

export default Contact;
