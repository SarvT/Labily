import React from "react";

function Services(){
    return(
        <>
        <div className="ser-main">

            <h4 className="ser-head">We Offer</h4>
            <div className="services">
                {/* <p className="cnt-subhead">We care for the pets,<br />
                    Contact us for any help.
                </p> */}
                <div className="ser-cards">

                <div className="cards">
                    <div className="card">
                        <div className="card-head"><i class="fa-solid fa-bowl-rice"></i> Pet food</div>
                        <div className="card-desc">Premium, nutritious pet food for a healthy, happy life.
Delicious and balanced meals tailored for your pet's needs.
</div>
                        <div className="card-cta">Know more...</div>
                    </div>
                    <div className="card" style={{backgroundColor:"white", color:"orange", border:"1px solid orange"}}>
                        <div className="card-head"><i class="fa-solid fa-shield-heart"></i>Pet care</div>
                        <div className="card-desc">Professional pet sitting and grooming services for your furry friends.
Reliable pet sitting, walking, and grooming for happy, healthy pets.</div>
                        <div className="card-cta">Know more...</div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card" style={{backgroundColor:"white", color:"orange", border:"1px solid orange"}}>
                        <div className="card-head"><i class="fa-solid fa-camera-retro" ></i>Pet Shoot</div>
                        <div className="card-desc">Capture precious moments with stunning pet photography sessions.
Professional pet portraits to cherish your furry friend's memories.</div>
                        <div className="card-cta">Know more...</div>
                    </div>
                    <div className="card">
                        <div className="card-head"><i class="fa-solid fa-fish-fins"></i>Per Experts</div>
                        <div className="card-desc">Expert advice and care for all your pet-related concerns.
Certified professionals providing top-notch pet care and guidance.</div>
                        <div className="card-cta">Know more...</div>
                    </div>
                </div>

                </div>
                <div className="ser-cnt">
                    <input placeholder="Samuel Kinder" type="text" name="name" />
                    <input placeholder="user@mail.com" type="email" name="email" />
                    <textarea placeholder="Any message?" type="text" name="desc" />
                    <button type="submit">Submit</button>
                </div>
            </div>
                </div>
        </>
    );
}

export default Services;