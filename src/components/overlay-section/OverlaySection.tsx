const OverlaySection: React.FC<{
  children?: React.ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor }) => {
  const overlaySectionStyle = {
    backgroundColor: backgroundColor || "rgba(49, 77, 61, 0.3)",
    boxSizing: "border-box",
    padding: 10,
    color: "white",
    marginTop: 5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  } as React.CSSProperties;

  return <section style={overlaySectionStyle}>{children}</section>;
};

export default OverlaySection;
