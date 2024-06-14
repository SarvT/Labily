import React from "react";

function Contact(){
    return(
        <>
        <div className="cnt-main">

                <h4 className="cnt-head">Contact 24x7</h4>
                <p className="cnt-subhead">We care for the pets,<br />
                    Contact us for any help.
                </p>
            <div className="contact">
                <div className="cnt-info">
                    <input placeholder="Samuel Kinder" type="text" name="name" />
                    <input placeholder="user@mail.com" type="email" name="email" />
                    <textarea placeholder="Any message?" type="text" name="desc" />
                    <button type="submit">Submit</button>
                </div>
                <div className="cnt-det">
                    <p>+91 8794561235</p>
                    <p>user@mail.com</p>
                    <address>31, Unknown Road, Near to the west, India</address>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;