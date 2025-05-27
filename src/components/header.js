import React, { useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Link to="" className="gohome"></Link>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link
          to="rs-pk"
          className={`rspk-ref ${
            location.pathname === "/rs-pk" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          2007 RS-PK
        </Link>
        <Link
          to="dp-ul"
          className={`dpul-ref ${
            location.pathname === "/dp-ul" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          2010 DP-UL
        </Link>
        <Link
          to="bw-plf"
          className={`bwplf-ref ${
            location.pathname === "/bw-plf" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          2013 BW-PLF
        </Link>
        <Link
          to="xy-sts"
          className={`xysts-ref ${
            location.pathname === "/xy-sts" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          2016 XY-STS
        </Link>
        <Link
          to="sum-lot"
          className={`sumlot-ref ${
            location.pathname === "/sum-lot" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          2018 SUM-LOT
        </Link>
        <Link
          to="bst-paf"
          className={`bstpaf-ref ${
            location.pathname === "/bst-paf" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          2023 BST-PAF
        </Link>
      </nav>
    </header>
  );
}

export default Header;
