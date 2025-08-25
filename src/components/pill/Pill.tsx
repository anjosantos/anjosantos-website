import "./pill.css";

type PillProps = {
  label: string;
  variant: "default" | "about";
};

const Pill: React.FC<PillProps> = ({ label, variant = "default" }) => {
  return (
    <span className={`pill ${variant === "about" ? "about" : ""}`}>
      {label}
    </span>
  );
};

export default Pill;
