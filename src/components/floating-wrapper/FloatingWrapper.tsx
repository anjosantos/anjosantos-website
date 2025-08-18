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
    <div
      className={className}
      style={{
        ...style,
        animation: "float 15s ease-in-out infinite",
      }}
    >
      {children}
    </div>
  );
};

export default FloatingWrapper;
