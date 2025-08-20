import { OverlaySection } from "@/components";

import "./back-button-overlay.css";

type BackButtonOverlayContainerProps = {
  isVisible: boolean;
  onClick: () => void;
};

const BackButtonOverlayContainer: React.FC<BackButtonOverlayContainerProps> = ({
  isVisible,
  onClick,
}) => {
  return (
    <section
      className={`two-columns-flex transition hidable clickable ${
        isVisible ? "visible" : ""
      }`}
      style={{ width: "100px" }}
    >
      <OverlaySection>
        <button className="back-button" onClick={onClick}>
          <span className="overlay-value">BACK</span>
        </button>
      </OverlaySection>
    </section>
  );
};

export default BackButtonOverlayContainer;
