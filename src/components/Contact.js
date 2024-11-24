import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          <iframe 
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1892.1542033112983!2d73.8901822!3d18.4696844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb7348e2457b%3A0x88bdf2b037e5f96d!2sGulbarga%20Tahari%20And%20Biryani!5e0!3m2!1sen!2sin!4v1697542824158!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>

          <div className="contact-details">
            <div className="detail-box">
              <span className="fas fa-user"></span>
              <span>Name: Tohit Mulani</span>
            </div>
            <div className="detail-box">
              <span className="fas fa-envelope"></span>
              <span>Email: tohit750@gmail.com</span>
            </div>
            <div className="detail-box">
              <span className="fas fa-phone"></span>
              <span>Contact: +91-8408853859</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
