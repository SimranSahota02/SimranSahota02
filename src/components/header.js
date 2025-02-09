import React from "react";
import "../styles/tcg-guides.css";

function Header() {
  return (
    <header className="header">
      <a href="/" className="gohome"></a>
      <nav className="navbar">
        <a href="/glc" className="glc-ref">
          GLC
        </a>
        <a href="/dp-ul" className="dpul-ref">
          2010 DP-UL
        </a>
        <a href="/sum-lot" className="sumlot-ref">
          2018 SUM-LOT
        </a>
        <a href="/bst-paf" className="bstpaf-ref">
          2023 BST-PAF
        </a>
      </nav>
    </header>
  );
}

export default Header;
