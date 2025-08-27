import { motion, AnimatePresence } from "framer-motion";

import { OverlaySection } from "@/components";

import "./back-button-overlay.css";

type BackButtonOverlayContainerProps = {
  isVisible: boolean;
  onClick: () => void;
  arrowPosition?: "left" | "right";
  arrowRotation?: number;
};

const BackButtonOverlayContainer: React.FC<BackButtonOverlayContainerProps> = ({
  isVisible,
  onClick,
  arrowPosition = "left",
  arrowRotation = 0,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="two-columns-flex transition clickable back-button-container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <OverlaySection backgroundColor="rgba(49, 77, 61, 0.8)">
            <button className="back-button" onClick={onClick}>
              <span className="overlay-value">
                {arrowPosition === "left" && (
                  <span
                    className="arrow arrow-left"
                    style={{ transform: `rotate(${arrowRotation}deg)` }}
                  >
                    ↑
                  </span>
                )}
                BACK
                {arrowPosition === "right" && (
                  <span
                    className="arrow arrow-right"
                    style={{ transform: `rotate(${arrowRotation}deg)` }}
                  >
                    ↑
                  </span>
                )}
              </span>
            </button>
          </OverlaySection>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default BackButtonOverlayContainer;
