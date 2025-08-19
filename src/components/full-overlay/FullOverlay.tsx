import { usePage } from "@/providers";

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
    color: "white",
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
          <FullOverlayContainer width={300} position={1}>
            <OverlaySection>
              <b>TEST</b>
            </OverlaySection>
          </FullOverlayContainer>
        </section>
      }
    </section>
  );
};

export default FullOverlay;
