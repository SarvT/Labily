import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";
import img1 from "./tran-pet1.png"
import img2 from "./tran-pet2.png"

function Home(){
    return(

        <>
        <Navbar/>
        <div className="home-page">

            {/* <h1>Hello</h1> */}
            <div className="heading-elements">

            <img className="head-img" src={img1} alt="Image"/>
            <div className="heading">

            <div className="main-heading">
                Give them,<br />
                they deserve.
            </div>
            <div className="btn-heading ">
                <button className="ctn-btn">Book</button>
                <button className="work-btn">Know more...</button>
            </div>
            </div>
        </div>
            </div>
        <Services/>
        <Contact/>
        <Footer/>
        </>
        )
} 
export default Home;