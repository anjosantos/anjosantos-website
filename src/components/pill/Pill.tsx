import "./pill.css";

const Pill: React.FC<{
  label: string;
}> = ({ label }) => {
  return <span className="pill">{label}</span>;
};

export default Pill;
