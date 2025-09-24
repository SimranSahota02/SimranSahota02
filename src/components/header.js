import React, { useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "rs-pk", label: "2007 RS-PK", className: "rspk-ref" },
    { path: "dp-ul", label: "2010 DP-UL", className: "dpul-ref" },
    { path: "bw-plf", label: "2013 BW-PLF", className: "bwplf-ref" },
    { path: "xy-sts", label: "2016 XY-STS", className: "xysts-ref" },
    { path: "sum-lot", label: "2018 SUM-LOT", className: "sumlot-ref" },
    { path: "bst-paf", label: "2023 BST-PAF", className: "bstpaf-ref" },
  ];

  return (
    <header className="header">
      <Link to="" className="gohome"></Link>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        {navLinks.map(({ path, label, className }) => (
          <Link
            key={path}
            to={path}
            className={`${className} ${location.pathname.startsWith(`/${path}`) ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
