import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const isMobile = useMediaQuery({ query: `(max-width:760px)` });
  const [change, setChange] = useState(false);
  const navData = [
    ["donate", "Donate"],
    ["volunteer", "Volunteer"],
    ["services", "Services"],
    ["contact", "Contact"],
    ["about", "About"],
  ];
  const hoverAnim = "hover:-translate-y-1 hover:drop-shadow-xl duration-300";
  return (
    <nav className="navbar">
      <div className={`logo ${hoverAnim}`}>
        <Link  to="/">LaBily</Link>
      </div>
      <ul className={isMobile && !change ? "nav-links hidden" : "nav-links"}>
        {navData.map((red, idx)=>(
          <li className={`font-semibold opacity-80 hover:opacity-100 ${hoverAnim}`} key={idx}>
          <Link to={`/${red[0]}`}>{red[1]}</Link>
        </li>
        ))}
      </ul>
      {isMobile ? (
        <div
          className={`menu ${change ? "change" : ""}`}
          onClick={() => setChange(!change)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
