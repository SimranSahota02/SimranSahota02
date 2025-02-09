import React, { useState } from "react";
import "../../styles/tcg-guides.css";
import FloatingTextBox from "../../components/floatingTextBox";
import { useNavigate } from "react-router-dom";

function Glc() {
  return (
    <div className="content">
      <FloatingTextBox />
    </div>
  );
}

export default Glc;
