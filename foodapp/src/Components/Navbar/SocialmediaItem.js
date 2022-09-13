import React from "react";
import "./Navbar.css";
const SocialmediaItem = ({ socialMediaLinks }) => {
  return (
    <div>
      <ul className="social-media-desktop">
        {socialMediaLinks.map((cur) => {
          const { id, url, Icon, className } = cur;
          return (
            <li key={id}>
              <a href={url} target="">
                <Icon className={className} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialmediaItem;
