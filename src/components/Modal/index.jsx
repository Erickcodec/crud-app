import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export default function Modal({ close = () => {}, isOpen = false, ...props }) {
  const { children } = props;

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? close() : null);

    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [close]);

  if (!isOpen) return null;

  return (
    <div className={`modal__wrapper fadeIn`}>
      <div className="modal__overlay" onClick={close}></div>
      <div className="modal translate delay-100">
        <div className="modal__exit">
          <FontAwesomeIcon icon={faXmark} className="icon" onClick={close} />
        </div>
        <div className={`modal__container`}>{children}</div>
      </div>
    </div>
  );
}
