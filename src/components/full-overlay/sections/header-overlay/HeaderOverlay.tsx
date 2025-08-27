import { motion, AnimatePresence } from "framer-motion";

import { OverlaySection } from "@/components";

type HeaderOverlayContainerProps = {
  isVisible: boolean;
};

const HeaderOverlayContainer: React.FC<HeaderOverlayContainerProps> = ({
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        >
          <OverlaySection>
            <span
              style={{
                fontFamily: "SpaceAge",
                color: "#30de3c",
                textDecoration: "underline",
                display: "block",
              }}
              className="green-glow-text"
            >
              ANJOSANTOS.DEV
            </span>
            <span
              style={{
                fontFamily: "DsDigital",
                color: "#8cd1c4",
              }}
            >
              SOFTWARE DEVELOPER
            </span>
          </OverlaySection>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default HeaderOverlayContainer;
