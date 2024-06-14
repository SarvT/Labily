import React from "react";
import "./style.css"

function Navbar(){
    return(
        <>
        <div>
            <nav>
                <div className="logo">LaBily</div>
                <ul>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Donate</li>
                    <li>Volunteer</li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar;