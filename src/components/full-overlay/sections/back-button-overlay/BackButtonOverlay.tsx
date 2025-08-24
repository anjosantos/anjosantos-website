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
    <section
      className={`two-columns-flex transition hidable clickable ${
        isVisible ? "visible" : ""
      }`}
      style={{ width: "100px" }}
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
    </section>
  );
};

export default BackButtonOverlayContainer;
