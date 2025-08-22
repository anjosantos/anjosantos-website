type ContainerHeaderProps = {
  label: string;
};
const ContainerHeader: React.FC<ContainerHeaderProps> = ({ label }) => {
  return (
    <h5
      style={{
        margin: 0,
        fontFamily: "D3Digitalism",
        fontSize: 30,
        color: "#ffcb6a",
      }}
    >
      {label}
    </h5>
  );
};

export default ContainerHeader;
