import { useState, useEffect } from "react";

export type GridPage = {
  rowIndex: number;
  columnIndex: number;
  content: React.ReactNode;
};
type GridPagesProps = {
  rows: number;
  columns: number;
  gridPages: GridPage[];
};

const GridPages: React.FC<GridPagesProps> = ({ rows, columns, gridPages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageWidth(window.innerWidth);
    setPageHeight(window.innerHeight);
    setIsLoading(false);
  }, []);

  return (
    <>
      <main style={{ position: "relative", overflow: "hidden" }}>
        <section
          style={{ width: pageWidth * columns, height: pageHeight * rows }}
        >
          {gridPages.map((page) => (
            <div
              key={`${page.rowIndex}-${page.columnIndex}`}
              style={{
                position: "absolute",
                top: page.rowIndex * pageHeight,
                left: page.columnIndex * pageWidth,
                width: pageWidth,
                height: pageHeight,
              }}
            >
              {page.content}
            </div>
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
