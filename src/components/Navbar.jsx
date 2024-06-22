import React, {useState} from "react";
import "./style.css";
import { useMediaQuery } from "react-responsive";

// function menuAnimation(ctx){
//   ctx.classList.toggle("change")
// }e

function Navbar() {
  const isMobile = useMediaQuery({ query: `(max-width:760px)` });
  const [change, setChange] = useState(false);
  return (
    <>
      <div>
        <nav>
          <div className="logo">LaBily</div>
          <ul>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About</li>
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
