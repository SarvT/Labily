import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";
import img1 from "./tran-pet1.png";
import img2 from "./tran-pet2.png";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <div className="main">
          <div className="bg"></div>
        </div>

        {/* <h1>Hello</h1> */}
        <div className="heading-elements">
          <div className="heading">
            <div className="main-heading">
              <p>Give them</p>
              <p>The care</p>
              <p>they deserve.</p>
              <p className="head-subline">We are just a click away.</p>
            </div>
            <img className="head-img" src={img1} alt="Image" />
            <div className="btn-heading ">
              <button className="ctn-btn" style={{backgroundColor: 'orange', color:'white'}}>Our Services</button>
              <button className="work-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
