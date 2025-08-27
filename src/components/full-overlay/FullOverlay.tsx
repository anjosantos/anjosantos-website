import { usePage } from "@/providers";

import { PageKeys } from "@/pages/grid-pages";
import { FullOverlayContainer } from "@/components";

import "./full-overlay.css";
import {
  PagesOverlay,
  OxyTempOverlay,
  StatusCoordOverlay,
  SocialsOverlay,
  HeaderOverlay,
  BackButtonOverlay,
} from "./sections";

type FullOverlayProps = {};
const FullOverlay: React.FC<FullOverlayProps> = () => {
  const { pageContext } = usePage();
  const { activeKey, setActiveKey, setIsReferencesOpen } = pageContext;

  return (
    <section className="full-overlay-container">
      <b>TESTING</b>
      <b
        style={{
          position: "absolute",
          left: "50px",
          top: "50px",
        }}
      >
        TESTING 2 {activeKey}
      </b>
      <div
        style={{
          position: "absolute",
          width: "100%",
          minHeight: "25vh",
          top: "-25px",
          backgroundImage: "linear-gradient(0deg, transparent, black 75%)",
          display: `${activeKey === PageKeys.ABOUT ? "block" : "none"}`,
        }}
        className="transition"
      ></div>
      <FullOverlayContainer width={210} position={1}>
        <HeaderOverlay
          isVisible={
            activeKey === PageKeys.HOME ||
            activeKey === PageKeys.PROJECTS ||
            activeKey === PageKeys.CONTACT
          }
        />
        <BackButtonOverlay
          isVisible={activeKey === PageKeys.ABOUT}
          onClick={() => setActiveKey(PageKeys.HOME)}
          arrowRotation={324}
        />
      </FullOverlayContainer>
      <FullOverlayContainer width={210} position={2}>
        <HeaderOverlay isVisible={activeKey === PageKeys.ABOUT} />
        <BackButtonOverlay
          isVisible={activeKey === PageKeys.PROJECTS}
          onClick={() => setActiveKey(PageKeys.HOME)}
          arrowPosition="right"
          arrowRotation={46}
        />
      </FullOverlayContainer>
      <FullOverlayContainer width={210} position={3}>
        <button
          className="references-button clickable transition"
          onClick={() => setIsReferencesOpen(true)}
        >
          references
        </button>
      </FullOverlayContainer>
      <FullOverlayContainer width={210} position={4}>
        <PagesOverlay activeKey={activeKey} isVisible={true} />
        <OxyTempOverlay isVisible={activeKey === PageKeys.HOME} />
        <StatusCoordOverlay isVisible={activeKey === PageKeys.HOME} />
        <BackButtonOverlay
          isVisible={activeKey === PageKeys.CONTACT}
          onClick={() => setActiveKey(PageKeys.HOME)}
          arrowRotation={235}
        />
        <SocialsOverlay isVisible={true} />
      </FullOverlayContainer>
    </section>
  );
};

export default FullOverlay;
