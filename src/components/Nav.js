import React, { useEffect, useRef, useState } from "react";
import { useRouteContext } from "../contexts/RouteControl";
import MenuButton from "./MenuButton";
import Logo from "../images/logo.png";

const THRESHOLD = 600;

const SidebarItem = ({ children, location, home }) => {
  return (
    <div
      className={home ? "side-bar-item side-bar-item-home" : "side-bar-item"}
      onClick={() => (window.location = location)}
    >
      {children}
    </div>
  );
};

export default function Nav(props) {
  // Responsive Navigation Bar

  // create a ref for the navigation bars and some of their components
  const navBarRef = useRef();
  const sidebarRef = useRef();

  // use the custom routing control syntax
  const routeContext = useRouteContext();

  // get the currentPath
  const currPath = routeContext.path;

  // defining a state that holds the current window size
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  // holding whether or not the sidebar(on smaller screens) is opened
  const [sideBarOpen, setSideBarOpen] = useState(() => false);

  // holding the scroll progress
  const [scrollY, setScrollY] = useState(() => window.scrollY);

  // adds a sticky class to nav bar according to the window scroll
  function classManipulator() {
    if (!navBarRef.current) return;

    var sticky = navBarRef.current.offsetTop;
    setScrollY(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
      navBarRef.current.classList.add("sticky");
    } else {
      navBarRef.current.classList.remove("sticky");
    }
  }

  // create an event listener for changes in screen size(width)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      classManipulator();
    };

    const handleScroll = () => {
      classManipulator();
    };

    window.addEventListener("resize", handleResize);

    if (navBarRef.current) {
      window.addEventListener("scroll", handleScroll);
    }
  });

  // a function that decides whether or not a screen width is small
  const isSmallScreen = () => {
    return windowWidth < THRESHOLD;
  };

  // a function that toggle the sidebar
  const toggleSideBar = () => {
    setSideBarOpen((prev) => !prev);
  };

  // define the nav bar for larger screens
  const navbar = (
    <div
      className={props.transparent ? "nav-bar nav-bar-transparent" : "nav-bar"}
      ref={navBarRef}
    >
      <a
        className={
          currPath === "sports" ? "nav-item nav-item-active" : "nav-item"
        }
        href="/sports"
      >
        Sports
      </a>
      <a
        className={
          currPath === "political-parties"
            ? "nav-item nav-item-active"
            : "nav-item"
        }
        href="/political-parties"
      >
        Political Parties
      </a>
      <a
        className={
          currPath === "travel-guide" ? "nav-item nav-item-active" : "nav-item"
        }
        href="/travel-guide"
      >
        Travel Guide
      </a>

      <a style={{ float: "left" }} className="nav-item" href="/">
        Home
      </a>
    </div>
  );

  // define the sidebar for smaller devices
  const sidebar = (
    <>
      <div className={`menu-btn-container ${scrollY <= 0 ? "sticky" : ""}`}>
        <MenuButton open={sideBarOpen} onClick={toggleSideBar} />
      </div>
      <div
        ref={sidebarRef}
        className={`side-bar side-bar-${sideBarOpen ? "opened" : "closed"}`}
      >
        <div
          className="side-bar-item side-bar-item-home"
          onClick={() => (window.location = "/")}
        ></div>
        <SidebarItem home location="/">
          <img src={Logo} className="nav-logo" alt="nav-logo" />
        </SidebarItem>
        <SidebarItem location="/political-parties">
          Political Parties
        </SidebarItem>
        <SidebarItem location="/travel-guide">Travel Guide</SidebarItem>
        <SidebarItem location="/sports">Sports</SidebarItem>
      </div>
    </>
  );

  return isSmallScreen() ? sidebar : navbar;
}
