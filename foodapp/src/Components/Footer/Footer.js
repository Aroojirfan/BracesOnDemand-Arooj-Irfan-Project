import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="l-footer">
        <div className="logo">
          <h2>
            <span>F</span>ood
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
          <li>
            <h2>Social</h2>
            <ul className="box">
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Pinterest</a>
              </li>
              <li>
                <a href="/">Dribbble</a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>Information</h2>
            <ul className="box h-box">
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Sales</a>
              </li>
              <li>
                <a href="/">Tickets</a>
              </li>
              <li>
                <a href="/">Certifications</a>
              </li>
              <li>
                <a href="/">Customer Service</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <ul className="box">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/">Contract</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="b-footer">
          <p>All rights reserved by ©FoodDelivery 2022 </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
