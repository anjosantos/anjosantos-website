import React from "react";

import { GridPages, GridPage } from "@/components";

const Home: React.FC = () => {
  const pages = [
    {
      rowIndex: 0,
      columnIndex: 0,
      content: <GridPage background="red">Page 1</GridPage>,
    },
    {
      rowIndex: 0,
      columnIndex: 1,
      content: <GridPage background="green">Page 2</GridPage>,
    },
    {
      rowIndex: 1,
      columnIndex: 0,
      content: <GridPage background="blue">Page 3</GridPage>,
    },
    {
      rowIndex: 1,
      columnIndex: 1,
      content: <GridPage background="yellow">Page 4</GridPage>,
    },
  ];

  return <GridPages rows={2} columns={2} gridPages={pages} />;
};

export default Home;
