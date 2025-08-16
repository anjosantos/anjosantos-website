import { useState, useEffect } from "react";

export type GridPage = {
  key: string;
  rowIndex: number;
  columnIndex: number;
  content: React.ReactNode;
};
type GridPagesProps = {
  rows: number;
  columns: number;
  gridPages: GridPage[];
  activeKey: string;
};

const GridPages: React.FC<GridPagesProps> = ({
  rows,
  columns,
  gridPages,
  activeKey,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const [viewerLeft, setViewerLeft] = useState(0);
  const [viewerTop, setViewerTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
      setPageHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pageWidth > 0 && pageHeight > 0) setIsLoading(false);
  }, [pageWidth, pageHeight]);

  useEffect(() => {
    if (activeKey) {
      const foundPage = gridPages.find((page) => page.key === activeKey);
      if (foundPage) {
        setViewerLeft(foundPage.columnIndex * pageWidth);
        setViewerTop(foundPage.rowIndex * pageHeight);
      }
    }
  }, [pageWidth, pageHeight, activeKey]);

  return (
    <>
      <main>
        <section
          style={{
            width: pageWidth * columns,
            height: pageHeight * rows,
            transform: `translate(-${viewerLeft}px, -${viewerTop}px)`,
            transition: "transform 1s ease-in-out",
            position: "relative",
          }}
        >
          {gridPages.map((page) => (
            <section
              key={`${page.rowIndex}-${page.columnIndex}`}
              style={{
                position: "absolute",
                top: page.rowIndex * pageHeight,
                left: page.columnIndex * pageWidth,
                width: pageWidth,
                height: pageHeight,
                overflow: "hidden",
              }}
            >
              {page.content}
            </section>
          ))}
        </section>
        {isLoading && (
          <section
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(47, 15, 15, 0.8)",
              zIndex: 9999,
            }}
          >
            <div
              className="loader"
              style={{
                width: 48,
                height: 48,
                border: "6px solid #ccc",
                borderTop: "6px solid #333",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            <style>
              {`
              @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
              }
            `}
            </style>
          </section>
        )}
      </main>
    </>
  );
};

export default GridPages;
