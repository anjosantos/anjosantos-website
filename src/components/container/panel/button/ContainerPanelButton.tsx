import "./container-panel-button.css";

type ContainerPanelButtonProps = {
  label: string;
  onClick: () => void;
};
const ContainerPanelButton: React.FC<ContainerPanelButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button className="container-panel-button transition" onClick={onClick}>
      {label}
    </button>
  );
};

export default ContainerPanelButton;
