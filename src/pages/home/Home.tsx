import React, { useState } from "react";

import { GridPages, GridPage } from "@/components";

const Home: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("page-1");
  const pages = [
    {
      key: "page-1",
      rowIndex: 5,
      columnIndex: 6,
      content: (
        <GridPage>
          Page 1
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
        </GridPage>
      ),
    },
    {
      key: "page-2",
      rowIndex: 0,
      columnIndex: 0,
      content: (
        <GridPage>
          Page 2
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
        </GridPage>
      ),
    },
    {
      key: "page-3",
      rowIndex: 8,
      columnIndex: 5,
      content: (
        <GridPage>
          Page 3
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
          <button onClick={() => setActiveKey("page-4")}>Go to Page 4</button>
        </GridPage>
      ),
    },
    {
      key: "page-4",
      rowIndex: 4,
      columnIndex: 1,
      content: (
        <GridPage>
          Page 4
          <button onClick={() => setActiveKey("page-1")}>Go to Page 1</button>
          <button onClick={() => setActiveKey("page-2")}>Go to Page 2</button>
          <button onClick={() => setActiveKey("page-3")}>Go to Page 3</button>
        </GridPage>
      ),
    },
  ];

  return (
    <GridPages rows={8} columns={5} gridPages={pages} activeKey={activeKey} />
  );
};

export default Home;
