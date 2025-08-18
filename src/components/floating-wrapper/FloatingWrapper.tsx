import React from "react";

import "./floating-wrapper.css";

interface FloatingWrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const FloatingWrapper: React.FC<FloatingWrapperProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <section
      className={className}
      style={{
        ...style,
        animation: "float 15s ease-in-out infinite",
      }}
    >
      {children}
    </section>
  );
};

export default FloatingWrapper;
