import React from "react";
import "./Footer.css";
import FooterItems from "./FooterItems";
const Footer = () => {
  const social = [
    {
      id: 1,
      url: "/",
      name: "facebook",
    },
    {
      id: 2,
      url: "/",
      name: "Twitter",
    },
    {
      id: 3,
      url: "/",
      name: "Instagram",
    },
  ];
  const information = [
    {
      id: 1,
      url: "/",
      name: "Blog",
    },
    {
      id: 2,
      url: "/",
      name: "Pricing",
    },
    {
      id: 3,
      url: "/",
      name: "Sales",
    },
    {
      id: 4,
      url: "/",
      name: "Tickets",
    },
  ];
  const legal = [
    {
      id: 1,
      url: "/",
      name: "Privacy Policy",
    },
    {
      id: 2,
      url: "/",
      name: "Terms of use",
    },
    {
      id: 3,
      url: "/",
      name: "Contact",
    },
  ];

  const footerLinks = [
    { id: 1, name: "Social", className: "box", links: social },
    { id: 2, name: "Information", className: "box h-box", links: information },
    { id: 3, name: "Legal", className: "box", links: legal },
  ];

  return (
    <>
      <footer className="footer">
        <div className="l-footer">
          <div className="logo">
            <h2>
              <span>F</span>oods
              <span>D</span>elivery
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p>
        </div>
        <ul className="r-footer">
          <FooterItems footerLinks={footerLinks} />
        </ul>
        <div className="b-footer">
          <p>All rights reserved by ©FoodDelivery 2022 </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
