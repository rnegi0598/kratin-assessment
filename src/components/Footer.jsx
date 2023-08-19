import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="address">
          <h2>WisdomInk</h2>
          <p>1234 Maple Street</p>
          <p>Citytown, Imaginaryland</p>
          <p>Fictional Country, 98765</p>
        </div>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <p>Home</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="copywrite">© 2021 Mies van der Rohe Society</div>
    </footer>
  );
};

export default Footer;
