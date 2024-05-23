import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
        <iframe 
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1892.1542033112983!2d73.8901822!3d18.4696844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb7348e2457b%3A0x88bdf2b037e5f96d!2sGulbarga%20Tahari%20And%20Biryani!5e0!3m2!1sen!2sin!4v1697542824158!5m2!1sen!2sin" 
        allowfullscreen="" 
        loading="lazy" 
        ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
