import { OverlaySection } from "@/components";

type StatusCoordOverlayContainerProps = {};

const StatusCoordOverlayContainer: React.FC<
  StatusCoordOverlayContainerProps
> = ({}) => {
  return (
    <section className="two-columns-flex">
      <section className="column" style={{ flex: 1.6 }}>
        <OverlaySection>
          <span className="overlay-label">STATUS</span>
          <span className="overlay-value active green-glow-text">ONLINE</span>
        </OverlaySection>
      </section>
      <section className="column">
        <OverlaySection>
          <span className="overlay-label">LONG 93E</span>
          <span className="overlay-label">LAT 11N</span>
        </OverlaySection>
      </section>
    </section>
  );
};

export default StatusCoordOverlayContainer;
