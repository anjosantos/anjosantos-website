import { memo } from "react";
import ContainerHeader from "../header";
import ContainerPanelButton from "./button";
import { Pill } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

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
      {/* Previous Button */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContainerPanelButton label="<<" onClick={onPrevious} />
      </section>

      {/* Main Content */}
      <section style={{ flexGrow: 1, marginLeft: "10px", marginRight: "10px" }}>
        {/* Animate label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ContainerHeader label={label} />
          </motion.div>
        </AnimatePresence>

        {/* Animate pills */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginBottom: "8px",
          }}
        >
          <AnimatePresence>
            {pills.map((pill) => (
              <motion.div
                key={pill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Pill label={pill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </section>

      {/* Next Button */}
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
