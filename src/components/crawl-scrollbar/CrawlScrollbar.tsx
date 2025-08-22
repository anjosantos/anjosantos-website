import React, { useRef, useEffect, useState } from "react";

type CrawlScrollBarProps = {
  children: React.ReactNode;
};

const CrawlScrollBar: React.FC<CrawlScrollBarProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(20);
  const [thumbTop, setThumbTop] = useState(0);
  const [y, setY] = useState(0);

  // Update thumb height and ratio

  // 1155.19 -> 2914.92
  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const visible = container.clientHeight;
      const total = content.scrollHeight;

      console.log(visible, total, content.clientHeight);

      const ratio = visible / total;
      setThumbHeight(Math.max(visible * ratio, 20));

      setThumbTop((-y / total) * visible);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [y]);

  // Thumb drag logic
  useEffect(() => {
    const thumb = thumbRef.current;
    const container = containerRef.current;
    const content = contentRef.current;
    if (!thumb || !container || !content) return;

    let startY = 0;
    let startTranslate = 0;

    const onMouseDown = (e: MouseEvent) => {
      startY = e.clientY;
      startTranslate = y;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      thumb.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientY - startY;
      const visible = container.clientHeight;
      const total = content.scrollHeight;

      const newY = startTranslate - (delta / visible) * total;
      setY(Math.min(0, Math.max(-(total - visible), newY)));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      thumb.style.cursor = "grab";
    };

    thumb.addEventListener("mousedown", onMouseDown);
    return () => thumb.removeEventListener("mousedown", onMouseDown);
  }, [y]);

  // Wheel / native scroll override
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault(); // stop native scroll
      const visible = container.clientHeight;
      const total = content.scrollHeight;

      const delta = e.deltaY; // wheel movement
      const newY = y - (delta / visible) * total;
      setY(Math.min(0, Math.max(-(total - visible), newY)));
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => container.removeEventListener("wheel", onWheel);
  }, [y]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        height: "100%",
        position: "relative",
        overflow: "hidden", // hide native scroll
      }}
    >
      <div
        ref={contentRef}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          perspective: "400px",
          position: "relative",
        }}
      >
        <section
          style={{
            transform: `rotateX(30deg) translateY(${y}px)`,
          }}
        >
          {children}
        </section>
      </div>

      <div
        style={{
          width: "8px",
          background: "rgb(77 68 49 / 30%)",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        <div
          ref={thumbRef}
          style={{
            width: "100%",
            height: `${thumbHeight}px`,
            background: "#473410",
            borderRadius: "4px",
            cursor: "grab",
            position: "absolute",
            top: `${thumbTop}px`,
          }}
        />
      </div>
    </div>
  );
};

export default CrawlScrollBar;
