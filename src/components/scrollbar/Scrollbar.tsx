import React, { useRef, useEffect, useState } from "react";

type ScrollbarProps = {
  children: React.ReactNode;
};

const Scrollbar: React.FC<ScrollbarProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(20);
  const [scrollRatio, setScrollRatio] = useState(1);
  const [thumbTop, setThumbTop] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const update = () => {
      const visible = container.clientHeight;
      const total = container.scrollHeight;
      const ratio = visible / total;

      setScrollRatio(ratio);
      setThumbHeight(Math.max(visible * ratio, 20));
      setThumbTop((container.scrollTop / total) * visible);
    };

    update();
    container.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      container.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const thumb = thumbRef.current;
    const container = scrollRef.current;
    if (!thumb || !container) return;

    let startY = 0;
    let startScrollTop = 0;

    const onMouseDown = (e: MouseEvent) => {
      startY = e.clientY;
      startScrollTop = container.scrollTop;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - startY;
      container.scrollTop = startScrollTop + deltaY / scrollRatio;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    thumb.addEventListener("mousedown", onMouseDown);
    return () => {
      thumb.removeEventListener("mousedown", onMouseDown);
    };
  }, [scrollRatio]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          height: "100%",
          overflowY: "scroll",
          paddingRight: "8px",
        }}
        className="hide-scrollbar"
      >
        {children}
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

export default Scrollbar;
