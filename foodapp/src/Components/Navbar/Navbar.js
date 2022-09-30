import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./Navbar.css";
import "./NavItem";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import NavItem from "./NavItem";
import SocialmediaItem from "./SocialmediaItem";

const Navbar = () => {
  const socialMediaLinks = [
    {
      id: 1,
      url: "https://www.facebook.com",
      Icon: FaFacebookSquare,
      className: "facebook",
    },
    {
      id: 2,
      url: "https://www.instagram.com",
      Icon: FaInstagramSquare,
      className: "instagram",
    },
    {
      id: 3,
      url: "https://www.youtube.com",
      Icon: FaYoutubeSquare,
      className: "youtube",
    },
  ];
  const navLinks = [
    {
      id: 1,
      url: "/",
      name: "Home",
    },
    {
      id: 2,
      url: "/",
      name: "About",
    },
    {
      id: 3,
      url: "Services",
      name: "Services",
    },
    {
      id: 4,
      url: "Contact",
      name: "Contact",
    },
  ];
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>F</span>ood
            <span>D</span>elivery
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <NavItem navLinks={navLinks} />
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <SocialmediaItem socialMediaLinks={socialMediaLinks} />

          <ShoppingCart />

          <div className="hamburger-menu">
            <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
