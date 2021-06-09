import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";

const THRESHOLD = 670;

function FooterMobileLink(props) {
  return (
    <div
      className="footer-mobile-links"
      onClick={() => (window.location = props.location)}
    >
      {props.text}
    </div>
  );
}

const FooterColumnLink = ({ text, location }) => {
  return (
    <a className="footer-column-link" href={location}>
      {text}
    </a>
  );
};

export default function Footer() {
  // setting up a state holding the current screen width
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function isSmallScreen() {
    return windowWidth < THRESHOLD;
  }

  return isSmallScreen() ? (
    <footer className="footer-mobile footer">
      <div className="footer-mobile-links footer-mobile-header">
        <img src={Logo} alt="logo" />
        <h6>Dream of Berlin</h6>
      </div>
      <FooterMobileLink text="Home" location="/" />
      <FooterMobileLink text="Travel Guide" location="/travel-guide" />
      <FooterMobileLink text="Sports" location="/sports" />
      <FooterMobileLink text="Celebrities" location="/celebrities" />

      <div className="footer-sub__copyright mobile">
        2021 © Tim &nbsp;&nbsp;All Rights Reserved
      </div>
    </footer>
  ) : (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main__column">
          <img
            style={{ margin: "5px" }}
            src={Logo}
            className="footer-logo"
            alt="Logo"
          />
          <h5 className="footer-column-title">Our Goal</h5>
          <p style={{ fontSize: "11px" }}>Learn German</p>
        </div>
        <div className="footer-main__column">
          <h5 className="footer-column-title">Support</h5>

          <a className="footer-column-link" href="/privacy-policies">
            Privacy Policies
          </a>
          <a className="footer-column-link" href="/terms-and-conditions">
            Terms and Conditions
          </a>
        </div>
        <div className="footer-main__column">
          <h5 className="footer-column-title">Read about Berlin</h5>
          <FooterColumnLink text="Travel Guide" location="/travel-guide" />
          <FooterColumnLink text="Sports" location="/sports" />
          <FooterColumnLink text="Celebrities" location="/celebrities" />
        </div>
      </div>
      <div className="footer-sub">
        <div className="footer-sub__copyright">
          2021 © Tim &nbsp;&nbsp;All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
