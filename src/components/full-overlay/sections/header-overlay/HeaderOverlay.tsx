import { OverlaySection } from "@/components";

type HeaderOverlayContainerProps = {
  isVisible: boolean;
};

const HeaderOverlayContainer: React.FC<HeaderOverlayContainerProps> = ({
  isVisible,
}) => {
  return (
    <section className={`transition hidable ${isVisible ? "visible" : ""}`}>
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
          FRONTEND DEVELOPER
        </span>
      </OverlaySection>
    </section>
  );
};

export default HeaderOverlayContainer;
