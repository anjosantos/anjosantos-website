import { memo } from "react";
import ContainerHeader from "../header";
import ContainerPanelButton from "./button";
import { Pill } from "@/components";

type ContainerPanelProps = {
  label: string;
  pills: string[];
  onNext: () => void;
  onPrevious: () => void;
};
const ContainerPanel: React.FC<ContainerPanelProps> = ({
  label,
  pills,
  onNext,
  onPrevious,
}) => {
  return (
    <section
      style={{
        display: "flex",
        margin: "8px 15px",
        borderBottom: "3px solid #ffcb6a",
      }}
    >
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContainerPanelButton label="<<" onClick={onPrevious} />
      </section>
      <section
        style={{
          flexGrow: 1,
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <ContainerHeader label={label} />
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginBottom: "8px",
          }}
        >
          {pills.map((pill) => (
            <Pill key={pill} label={pill} />
          ))}
        </section>
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContainerPanelButton label=">>" onClick={onNext} />
      </section>
    </section>
  );
};

export default memo(ContainerPanel);
