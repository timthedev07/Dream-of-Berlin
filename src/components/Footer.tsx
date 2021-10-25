import React, { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";

const THRESHOLD = 670;

interface FooterMobileLinkProps {
  location: string;
  text: string;
}
const FooterMobileLink: FC<FooterMobileLinkProps> = (props) => {
  const { push } = useRouter();
  return (
    <div className="footer-mobile-links" onClick={() => push(props.location)}>
      {props.text}
    </div>
  );
};

interface FooterColumnLinkProps {
  text: string;
  location: string;
}
const FooterColumnLink: FC<FooterColumnLinkProps> = ({ text, location }) => {
  return (
    <a className="footer-column-link" href={location}>
      {text}
    </a>
  );
};

export const Footer: FC = () => {
  // setting up a state holding the current screen width
  const [windowWidth, setWindowWidth] = useState(() => 0);
  const logoPath = "/images/logo.png";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
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
        <img src={logoPath} alt="logo" />
        <h6>Dream of Berlin</h6>
      </div>
      <FooterMobileLink text="Home" location="/" />
      <FooterMobileLink text="Travel Guide" location="/travel-guide" />
      <FooterMobileLink
        text="Political Parties"
        location="/political-parties"
      />
      <FooterMobileLink text="Sports" location="/sports" />

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
            src={logoPath}
            className="footer-logo"
            alt="Logo"
          />
          <h5 className="footer-column-title">Our Goal</h5>
          <p style={{ fontSize: "16px" }}>Learn German</p>
        </div>
        <div className="footer-main__column">
          <h5 className="footer-column-title">Support</h5>

          <a className="footer-column-link" href="/privacy-policies">
            Privacy Policies
          </a>
          <a className="footer-column-link" href="/terms-and-conditions">
            Terms and Conditions
          </a>

          <a className="footer-column-link" href="/credit">
            Credit
          </a>
        </div>
        <div className="footer-main__column">
          <h5 className="footer-column-title">Read about Berlin</h5>
          <FooterColumnLink text="Home" location="/" />
          <FooterColumnLink text="Travel Guide" location="/travel-guide" />
          <FooterColumnLink text="Sports" location="/sports" />
          <FooterColumnLink
            text="Political Parties"
            location="/political-parties"
          />
        </div>
      </div>
      <div className="footer-sub">
        <div className="footer-sub__copyright">
          2021 © Cristina {"&"} Tim &nbsp;&nbsp;All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
