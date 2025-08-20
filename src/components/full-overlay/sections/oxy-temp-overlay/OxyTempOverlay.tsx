import { OverlaySection } from "@/components";

type OxyTempOverlayContainerProps = {};

const OxyTempOverlayContainer: React.FC<
  OxyTempOverlayContainerProps
> = ({}) => {
  return (
    <section className="two-columns-flex">
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
    </section>
  );
};

export default OxyTempOverlayContainer;
