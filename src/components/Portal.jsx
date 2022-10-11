import React, { Children, useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("portal");

export default function Portal({ ...props }) {
  const { chidren } = props;

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return ReactDOM.createPortal(Children, modalRoot);
}
