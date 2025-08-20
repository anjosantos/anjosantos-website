import { PageKeys } from "@/pages/grid-pages";
import { OverlaySection } from "@/components";

type PagesOverlayContainerProps = {
  activeKey: PageKeys;
  isVisible: boolean;
};

const PagesOverlayContainer: React.FC<PagesOverlayContainerProps> = ({
  activeKey,
  isVisible,
}) => {
  return (
    <section className={`transition hidable ${isVisible ? "visible" : ""}`}>
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
    </section>
  );
};

export default PagesOverlayContainer;
