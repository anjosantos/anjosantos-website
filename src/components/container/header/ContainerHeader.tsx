import "./container-header.css";

type ContainerHeaderProps = {
  label: string;
};
const ContainerHeader: React.FC<ContainerHeaderProps> = ({ label }) => {
  return <h5 className="container-header">{label}</h5>;
};

export default ContainerHeader;
