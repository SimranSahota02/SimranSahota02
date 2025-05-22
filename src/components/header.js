import React from "react";
import "../styles/tcg-guides.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="" className="gohome"></Link>
      <nav className="navbar">
        <Link
          to="rs-pk"
          className={`rspk-ref ${
            location.pathname === "/rs-pk" ? "active" : ""
          }`}
        >
          2007 RS-PK
        </Link>
        <Link
          to="dp-ul"
          className={`dpul-ref ${
            location.pathname === "/dp-ul" ? "active" : ""
          }`}
        >
          2010 DP-UL
        </Link>
        <Link
          to="bw-plf"
          className={`bwplf-ref ${
            location.pathname === "/bw-plf" ? "active" : ""
          }`}
        >
          2013 BW-PLF
        </Link>
        <Link
          to="xy-sts"
          className={`xysts-ref ${
            location.pathname === "/xy-sts" ? "active" : ""
          }`}
        >
          2016 XY-STS
        </Link>
        <Link
          to="sum-lot"
          className={`sumlot-ref ${
            location.pathname === "/sum-lot" ? "active" : ""
          }`}
        >
          2018 SUM-LOT
        </Link>
        <Link
          to="bst-paf"
          className={`bstpaf-ref ${
            location.pathname === "/bst-paf" ? "active" : ""
          }`}
        >
          2023 BST-PAF
        </Link>
        <Link
          to="glc"
          className={`glc-ref ${location.pathname === "/glc" ? "active" : ""}`}
        >
          GLC
        </Link>
      </nav>
    </header>
  );
}

export default Header;
