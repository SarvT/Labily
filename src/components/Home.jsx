import React from "react";
import img1 from "../static/images/tran-pet1.png";

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="main">
          <div className="bg"></div>
        </div>

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
    </>
  );
}
export default Home;
