import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <footer>
          <div className="lists">
            <ul>
              <li>
                <h4>Want to Help?</h4>
              </li>
              <li>Volunteer</li>
              <li>Cotribute</li>
              <li>Donate</li>
            </ul>
            <ul className="address">
              <li>
                <h4>Find us here</h4>
              </li>
              <li>
                <p>+91 8794561235</p>
              </li>

              <li>
                <p>user@mail.com</p>
              </li>
              <li>
                <address>31, Unknown Road, Near to the west, India</address>
              </li>
            </ul>
            <ul className="media">
              <li className="media-head">
                <h4>Our Media</h4>
              </li>
              <div className="media-sub">
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-solid fa-map-pin"></i>
                </li>
              </div>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
