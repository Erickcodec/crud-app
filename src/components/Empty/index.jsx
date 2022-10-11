import React from "react";
import EmptyBox from "../../assets/empty-box.png";
import "./index.css";

export function Empty() {
  return (
    <div className="empty">
      <img src={EmptyBox} alt="empty box" className="empty__img" />
      <h3 className="empty__title">No content</h3>
      <p className="empty__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nihil
        maiores, molestiae quaerat nemo unde aperiam dolor
      </p>
    </div>
  );
}
