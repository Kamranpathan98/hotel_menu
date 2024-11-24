import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        {/* <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div> */}
        <div class="links">
          <a href="#">home</a>
          <a href="#menu">menu</a>
          <a href="#contact">contact</a>
        </div>
        <div class="credit">
          created by <span>Kamran Pathan</span> | <span className="fas fa-phone"></span> <span>9730632772</span> | <span className="fas fa-envelope"></span> <span>kamranpwebdev@gmail.com</span> |  all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
