import React, { useState, useEffect } from "react";
import "./modal.css";

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isVisible, onClose }) => {
  const [show, setShow] = useState(false); // controls mounting
  const [fade, setFade] = useState(false); // controls CSS class

  useEffect(() => {
    if (isVisible) {
      setShow(true); // mount immediately
      // Wait a tick so that CSS transition works
      const timer = setTimeout(() => setFade(true), 10);
      return () => clearTimeout(timer);
    } else if (show) {
      setFade(false); // trigger fade-out
      const timer = setTimeout(() => setShow(false), 1000); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isVisible, show]);

  if (!show) return null;

  return (
    <section
      className={`modal-main-container ${fade ? "fade-in" : "fade-out"}`}
    >
      <section className="modal-container">
        {children}
        <button onClick={onClose} className="modal-close-button">
          X
        </button>
      </section>
    </section>
  );
};

export default Modal;
