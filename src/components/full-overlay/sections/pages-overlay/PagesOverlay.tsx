import { PageKeys } from "@/pages/grid-pages";
import { OverlaySection } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

type PagesOverlayContainerProps = {
  activeKey: PageKeys;
  isVisible: boolean;
};

const PagesOverlayContainer: React.FC<PagesOverlayContainerProps> = ({
  activeKey,
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="hidable"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <OverlaySection>
            <span className="overlay-label">PAGES</span>

            <section className="pages-options">
              <span
                className={`${
                  activeKey === PageKeys.HOME
                    ? "pages-option active green-glow-text"
                    : "pages-option"
                }`}
              >
                01
              </span>
              <span
                className={`${
                  activeKey === PageKeys.PROJECTS
                    ? "pages-option active green-glow-text"
                    : "pages-option"
                }`}
              >
                02
              </span>
              <span
                className={`${
                  activeKey === PageKeys.ABOUT
                    ? "pages-option active green-glow-text"
                    : "pages-option"
                }`}
              >
                03
              </span>
              <span
                className={`${
                  activeKey === PageKeys.CONTACT
                    ? "pages-option active green-glow-text"
                    : "pages-option"
                }`}
              >
                04
              </span>
            </section>
          </OverlaySection>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default PagesOverlayContainer;
