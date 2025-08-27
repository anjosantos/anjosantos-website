import { motion, AnimatePresence } from "framer-motion";

import { OverlaySection } from "@/components";

type OxyTempOverlayContainerProps = {
  isVisible: boolean;
};

const OxyTempOverlayContainer: React.FC<OxyTempOverlayContainerProps> = ({
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="two-columns-flex transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        >
          <section className="column">
            <OverlaySection>
              <span className="overlay-label">OXY</span>
              <span className="overlay-value active green-glow-text">96%</span>
            </OverlaySection>
          </section>
          <section className="column">
            <OverlaySection>
              <span className="overlay-label">TEMP</span>
              <span className="overlay-value">2.7K</span>
            </OverlaySection>
          </section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default OxyTempOverlayContainer;
