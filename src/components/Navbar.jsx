import React, {useState} from "react";
import "./style.css";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-router-dom";

function Navbar() {
  const isMobile = useMediaQuery({ query: `(max-width:760px)` });
  const [change, setChange] = useState(false);
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <Link to="/home">
            LaBily
            </Link>
            </div>
          <ul>
            <li>
              <Link to="/donate">
              Donate
              </Link>
              </li>
            <li><Link to="/volunteer">
              Volunteer
              </Link>
              </li>
            <li>
            <Link to="/services">
              Services
              </Link>

            </li>
            <li>
            <Link to="/contact">
              Contact
              </Link>

            </li>
            <li>
            <Link to="/about">
              About
              </Link>
              </li>
          </ul>
          { isMobile ?
            <div className={change ? `menu change` : `menu`} onClick={()=>{setChange(!change)}}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            :
            <></>
          }
        </nav>
      </div>
    </>
  );
}

export default Navbar;
