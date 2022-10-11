import React from "react";
import "./index.css";

export default function Confirmation({
  title = "",
  description = "",
  accept = () => {},
}) {
  return (
    <div className="confirmation__wrapper">
      <header className="confirmation__header">
        <div className="confirmation__title">{title}</div>
      </header>
      <section className="confirmation__content">
        <p className="confirmation__description">{description}</p>
      </section>
      <footer className="confirmation__footer">
        <button className="confirmation__accept" onClick={accept}>
          Aceptar
        </button>
      </footer>
    </div>
  );
}
