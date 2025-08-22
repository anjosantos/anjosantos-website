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
  const [scrollPercent, setScrollPercent] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [y, setY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const BUFFER_ROTATION = 400;

  // Update thumb height + total scrollable height
  useEffect(() => {
    const update = () => {
      setRotation(0);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (rotation == 0) {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const visible = container.clientHeight;
      const total = content.scrollHeight;
      setScrollHeight(total + (total - visible));

      setRotation(30);
      const ratio = visible / total;
      setThumbHeight(Math.max(visible * ratio, 20));
    }
  }, [rotation]);

  // Whenever scrollPercent or scrollHeight changes, update y + thumbTop
  useEffect(() => {
    const container = containerRef.current;
    if (!container || scrollHeight === 0) return;

    const visible = container.clientHeight;
    const scrollable = scrollHeight - visible;

    // derive Y from percentage
    const newY = -(scrollPercent / 100) * scrollable;
    setY(newY + BUFFER_ROTATION);

    // derive thumbTop from percentage
    const maxThumbTop = visible - thumbHeight;
    setThumbTop((scrollPercent / 100) * maxThumbTop);
  }, [scrollPercent, scrollHeight, thumbHeight]);

  // Thumb drag logic
  useEffect(() => {
    const thumb = thumbRef.current;
    const container = containerRef.current;
    if (!thumb || !container) return;

    let startY = 0;
    let startPercent = 0;

    const onMouseDown = (e: MouseEvent) => {
      startY = e.clientY;
      startPercent = scrollPercent;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      thumb.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientY - startY;
      const visible = container.clientHeight;
      const maxThumbTop = visible - thumbHeight;

      const deltaPercent = (delta / maxThumbTop) * 100;
      const newPercent = Math.min(
        100,
        Math.max(0, startPercent + deltaPercent)
      );
      setScrollPercent(newPercent);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      thumb.style.cursor = "grab";
    };

    thumb.addEventListener("mousedown", onMouseDown);
    return () => thumb.removeEventListener("mousedown", onMouseDown);
  }, [scrollPercent, thumbHeight]);

  // Wheel override
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const visible = container.clientHeight;
      const scrollable = scrollHeight - visible;

      if (scrollable <= 0) return;

      const deltaPercent =
        (e.deltaY / visible) * (visible / scrollHeight) * 100;
      setScrollPercent((prev) =>
        Math.min(100, Math.max(0, prev + deltaPercent * 10))
      );
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [scrollHeight]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        height: "100%",
        position: "relative",
        overflow: "hidden",
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
            transform: `rotateX(${rotation}deg) translateY(${y}px)`,
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
