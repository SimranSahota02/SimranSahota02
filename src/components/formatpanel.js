import React, { useState, useEffect } from "react";
import "../styles/tcg-guides.css";

function FormatPanel({ body, href }) {
  console.log(href);
  return (
    <div className="format-panel">
      <img src={require(`../images/${href}`)} alt="text" />
      <div>{body}</div>
    </div>
  );
}

export default FormatPanel;
