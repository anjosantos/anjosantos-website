const OverlaySection: React.FC<{
  children?: React.ReactNode;
  background?: string;
}> = ({ children }) => {
  const overlaySectionStyle = {
    backgroundColor: "rgba(49, 77, 61, 0.3)",
    padding: 10,
    color: "white",
  } as React.CSSProperties;

  return <section style={overlaySectionStyle}>{children}</section>;
};

export default OverlaySection;
