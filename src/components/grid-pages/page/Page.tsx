import React from "react";

const Page: React.FC<{ children?: React.ReactNode; background?: string }> = ({
  children,
  background,
}) => {
  return (
    <section
      style={{
        background,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </section>
  );
};

export default Page;
