import React from "react";
import "../styles/tcg-guides.css";

function Header() {
  return (
    <header className="header">
      <a href="/">Home</a>
      <a href="/glc">GLC</a>
      <a href="/dp-ul">2010 DP-UL</a>
      <a href="/sum-lot">2018 SUM-LOT</a>
      <a href="/bst-paf">2023 BST-PAF</a>
    </header>
  );
}

export default Header;
