import React from "react";
import "../CSS/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>My Portfolio</h3>
          <p>© 2023 My Portfolio. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <h3>Connect with me</h3>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
