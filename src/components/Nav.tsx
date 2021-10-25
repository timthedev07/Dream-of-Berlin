import React, { FC, useEffect, useRef, useState } from "react";
import { MenuButton } from "./MenuButton";
import { useRouter } from "next/router";

const THRESHOLD = 600;

interface SidebarItemProps {
  location: string;
  home?: boolean;
}
const SidebarItem: FC<SidebarItemProps> = ({ children, location, home }) => {
  const { push } = useRouter();
  return (
    <div
      className={home ? "side-bar-item side-bar-item-home" : "side-bar-item"}
      onClick={() => push(location)}
    >
      {children}
    </div>
  );
};

interface NavbarProps {
  transparent?: boolean;
}
export const Nav: FC<NavbarProps> = (props) => {
  // Responsive Navigation Bar

  // create a ref for the navigation bars and some of their components
  const navBarRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { asPath, push } = useRouter();

  // defining a state that holds the current window size
  const [windowWidth, setWindowWidth] = useState(0);

  // holding whether or not the sidebar(on smaller screens) is opened
  const [sideBarOpen, setSideBarOpen] = useState(() => false);

  // holding the scroll progress
  const [scrollY, setScrollY] = useState(0);

  // adds a sticky class to nav bar according to the window scroll
  function classManipulator() {
    if (!navBarRef.current) return;

    var sticky = navBarRef.current.offsetTop;
    setScrollY(window.scrollY);
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

    handleResize();

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
          asPath === "/sports" ? "nav-item nav-item-active" : "nav-item"
        }
        href="/sports"
      >
        Sports
      </a>
      <a
        className={
          asPath === "/political-parties"
            ? "nav-item nav-item-active"
            : "nav-item"
        }
        href="/political-parties"
      >
        Political Parties
      </a>
      <a
        className={
          asPath === "/travel-guide" ? "nav-item nav-item-active" : "nav-item"
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
          onClick={() => push("/")}
        ></div>
        <SidebarItem home location="/">
          <img src={"/images/logo.png"} className="nav-logo" alt="nav-logo" />
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
};
