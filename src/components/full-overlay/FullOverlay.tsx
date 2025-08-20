import { usePage } from "@/providers";

import { PageKeys } from "@/pages/grid-pages";
import { FullOverlayContainer, OverlaySection } from "@/components";

import "./full-overlay.css";
import {
  PagesOverlay,
  OxyTempOverlay,
  StatusCoordOverlay,
  SocialsOverlay,
  HeaderOverlay,
} from "./sections";

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
            <HeaderOverlay
              isVisible={
                activeKey === PageKeys.HOME ||
                activeKey === PageKeys.PROJECTS ||
                activeKey === PageKeys.CONTACT
              }
            />
          </FullOverlayContainer>
          <FullOverlayContainer width={210} position={2}>
            <HeaderOverlay isVisible={activeKey === PageKeys.ABOUT} />
          </FullOverlayContainer>
          <FullOverlayContainer width={210} position={4}>
            <PagesOverlay activeKey={activeKey} isVisible={true} />
            <OxyTempOverlay isVisible={activeKey === PageKeys.HOME} />
            <StatusCoordOverlay isVisible={activeKey === PageKeys.HOME} />
            <SocialsOverlay isVisible={true} />
          </FullOverlayContainer>
        </section>
      }
    </section>
  );
};

export default FullOverlay;
