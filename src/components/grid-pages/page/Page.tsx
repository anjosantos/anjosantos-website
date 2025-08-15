import React from "react";

const Page: React.FC<{ children?: React.ReactNode; background?: string }> = ({
  children,
  background,
}) => {
  return (
    <section style={{ background, width: "100vw", height: "100vh" }}>
      {children}
    </section>
  );
};

export default Page;
