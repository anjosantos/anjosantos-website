import "./container.css";

type ContainerProps = {
  children?: React.ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100%",
        background: "rgb(89 67 26 / 70%)",
        borderRadius: "20px",
        border: "2px solid #ffcb6a",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
