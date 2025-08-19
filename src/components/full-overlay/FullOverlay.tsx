import { usePage } from "@/providers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { PageKeys } from "@/pages/grid-pages";
import { FullOverlayContainer, OverlaySection } from "@/components";

import "./full-overlay.css";

type FullOverlayProps = {};
const FullOverlay: React.FC<FullOverlayProps> = () => {
  const { pageContext } = usePage();
  const { activeKey } = pageContext;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    width: "100vw",
    height: "100vh",
    zIndex: 1,
    pointerEvents: "none",
  } as React.CSSProperties;

  const renderOverlay = () => {
    if (activeKey === PageKeys.HOME) {
      return <></>;
    } else if (activeKey === PageKeys.PROJECTS) {
      return <></>;
    } else if (activeKey === PageKeys.ABOUT) {
      return <></>;
    } else if (activeKey === PageKeys.CONTACT) {
      return <></>;
    }
  };

  return (
    <section style={overlayStyle}>
      {
        <section>
          <FullOverlayContainer width={210} position={1}>
            <OverlaySection>
              <span
                style={{
                  fontFamily: "SpaceAge",
                  color: "#30de3c",
                  textDecoration: "underline",
                  display: "block",
                }}
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
          </FullOverlayContainer>
          <FullOverlayContainer width={210} position={4}>
            <OverlaySection>
              <span className="overlay-label">PAGES</span>

              <section className="pages-options">
                <span className="pages-option active">01</span>
                <span className="pages-option">02</span>
                <span className="pages-option">03</span>
                <span className="pages-option">04</span>
              </section>
            </OverlaySection>
            <section className="two-columns-flex">
              <section className="column">
                <OverlaySection>
                  <span className="overlay-label">OXY</span>
                  <span className="overlay-value active">96%</span>
                </OverlaySection>
              </section>
              <section className="column">
                <OverlaySection>
                  <span className="overlay-label">TEMP</span>
                  <span className="overlay-value">2.7K</span>
                </OverlaySection>
              </section>
            </section>
            <OverlaySection>
              <section className="two-columns-flex">
                <section className="column">
                  <span className="overlay-label">ORIGIN</span>
                </section>
                <section className="column" style={{ flex: 1.2 }}>
                  <span className="overlay-value">CANADA</span>
                </section>
              </section>
            </OverlaySection>
            <section className="two-columns-flex">
              <section className="column" style={{ flex: 1.6 }}>
                <OverlaySection>
                  <span className="overlay-label">STATUS</span>
                  <span className="overlay-value active">ONLINE</span>
                </OverlaySection>
              </section>
              <section className="column">
                <OverlaySection>
                  <span className="overlay-label">LONG 93E</span>
                  <span className="overlay-label">LAT 11N</span>
                </OverlaySection>
              </section>
            </section>
            <section style={{ marginTop: 5 }}>
              <FontAwesomeIcon icon={faSquareLinkedin} color="#8cd1c4" size="lg" />
              <FontAwesomeIcon icon={faSquareGithub} color="#8cd1c4" size="lg" />
              <FontAwesomeIcon icon={faSquareInstagram} color="#8cd1c4" size="lg" />
            </section>
          </FullOverlayContainer>
        </section>
      }
    </section>
  );
};

export default FullOverlay;
