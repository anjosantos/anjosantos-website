import React, { useState } from "react";

import { GridPages, GridPage } from "@/components";

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("page-1");
  const pages = [
    {
      key: "page-1",
      rowIndex: 0,
      columnIndex: 0,
      content: (
        <GridPage background="red">
          Page 1
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
        </GridPage>
      ),
    },
    {
      key: "page-2",
      rowIndex: 0,
      columnIndex: 1,
      content: (
        <GridPage background="green">
          Page 2
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
        </GridPage>
      ),
    },
    {
      key: "page-3",
      rowIndex: 1,
      columnIndex: 0,
      content: (
        <GridPage background="blue">
          Page 3
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
        </GridPage>
      ),
    },
    {
      key: "page-4",
      rowIndex: 1,
      columnIndex: 1,
      content: (
        <GridPage background="yellow">
          Page 4
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
        </GridPage>
      ),
    },
  ];

  return (
    <GridPages rows={2} columns={2} gridPages={pages} activeKey={activeKey} />
  );
};

export default Home;
