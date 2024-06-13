import React from "react";
import "./style.css"

function Navbar(){
    return(
        <>
        <div>
            <nav>
                <div className="logo">LaBily</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar;