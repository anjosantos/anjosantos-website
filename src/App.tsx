import AppRoutes from "./routes";
import "./App.css";

import { useLoading, usePage } from "@/providers";
import { FullLoader, FullOverlay, Modal } from "@/components";

const App = () => {
  const { loadingContext } = useLoading();
  const { isLoading } = loadingContext;
  const { pageContext } = usePage();
  const { isReferencesOpen, setIsReferencesOpen } = pageContext;

  return (
    <>
      <AppRoutes />
      <FullOverlay />
      <Modal
        onClose={() => setIsReferencesOpen(false)}
        isVisible={isReferencesOpen}
      >
        <>
          <h5 className="modal-title">references</h5>
          <section
            className="reference-list-container"
            aria-labelledby="fonts-heading"
          >
            <h6 id="fonts-heading" className="reference-list-heading">
              Fonts
            </h6>
            <ul className="reference-list">
              <li>
                <a
                  href="https://www.dafont.com/d3digitalism.font"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  D3Digitalism
                </a>
              </li>
              <li>
                <a
                  href="https://www.dafont.com/ds-digital.font"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  DsDigital
                </a>
              </li>
              <li>
                <a
                  href="https://www.dafont.com/edges.font"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  Edges
                </a>
              </li>
              <li>
                <a
                  href="https://www.dafont.com/space-age.font"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  SpaceAge
                </a>
              </li>
            </ul>
          </section>
          <section
            className="reference-list-container"
            aria-labelledby="objects-heading"
          >
            <h6 id="objects-heading" className="reference-list-heading">
              3D Objects
            </h6>
            <ul className="reference-list">
              <li>
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  Astronaut by Poly by Google [CC-BY]
                </a>{" "}
                via{" "}
                <a
                  href="https://poly.pizza/m/dLHpzNdygsg"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  Poly Pizza
                </a>
              </li>
              <li>
                <a
                  href="https://skfb.ly/orSpX"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  "MacBook Pro 2021"
                </a>{" "}
                by KangaroOz 3D is licensed under{" "}
                <a
                  href="http://creativecommons.org/licenses/by-nc/4.0/"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  Creative Commons Attribution-NonCommercial
                </a>
                .
              </li>
              <li>
                <a
                  href="https://www.spacespheremaps.com/hdr-spheremaps/"
                  target="_blank"
                  className="reference-list-button transition clickable"
                >
                  Nebulae HDR
                </a>
              </li>
            </ul>
          </section>
        </>
      </Modal>
      <FullLoader isLoading={isLoading} />
    </>
  );
};

export default App;
