import React from "react";
import "../styles/tcg-guides.css";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <a href="/" className="gohome"></a>
      <nav className="navbar">
        <a
          href="/glc"
          className={`glc-ref ${
            location.pathname === "/#/glc" ? "active" : ""
          }`}
        >
          GLC
        </a>
        <a
          href="/dp-ul"
          className={`dpul-ref ${
            location.pathname === "/#/dp-ul" ? "active" : ""
          }`}
        >
          2010 DP-UL
        </a>
        <a
          href="/sum-lot"
          className={`sumlot-ref ${
            location.pathname === "/#/sum-lot" ? "active" : ""
          }`}
        >
          2018 SUM-LOT
        </a>
        <a
          href="/bst-paf"
          className={`bstpaf-ref ${
            location.pathname === "/#/bst-paf" ? "active" : ""
          }`}
        >
          2023 BST-PAF
        </a>
      </nav>
    </header>
  );
}

export default Header;
