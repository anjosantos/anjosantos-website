import { motion, AnimatePresence } from "framer-motion";

import { OverlaySection } from "@/components";

type StatusCoordOverlayContainerProps = {
  isVisible: boolean;
};

const StatusCoordOverlayContainer: React.FC<
  StatusCoordOverlayContainerProps
> = ({ isVisible }) => {
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
          <section className="column" style={{ flex: 1.6 }}>
            <OverlaySection>
              <span className="overlay-label">STATUS</span>
              <span className="overlay-value active green-glow-text">
                ONLINE
              </span>
            </OverlaySection>
          </section>
          <section className="column">
            <OverlaySection>
              <span className="overlay-label">LONG 93E</span>
              <span className="overlay-label">LAT 11N</span>
            </OverlaySection>
          </section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default StatusCoordOverlayContainer;
