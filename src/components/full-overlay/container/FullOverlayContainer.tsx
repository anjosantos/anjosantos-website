type FullOverlayContainerProps = {
  children?: React.ReactNode;
  width: number;
  position: 1 | 2 | 3 | 4;
};

const FullOverlayContainer: React.FC<FullOverlayContainerProps> = ({
  children,
  width,
  position,
}) => {
  const getPosition = () => {
    if (position === 1) {
      return { top: "0", left: "0" };
    } else if (position === 2) {
      return { top: "0", right: "0", alignItems: "end" };
    } else if (position === 3) {
      return { bottom: "0", right: "0", alignItems: "end" };
    } else if (position === 4) {
      return { bottom: "0", left: "0" };
    }
  };

  const fullOverlayContainerStyle = {
    width,
    position: "absolute",
    margin: 10,
    display: "flex",
    flexDirection: "column",
    ...getPosition(),
  } as React.CSSProperties;

  return (
    <section style={fullOverlayContainerStyle} className="clickable">
      {children}
    </section>
  );
};

export default FullOverlayContainer;
