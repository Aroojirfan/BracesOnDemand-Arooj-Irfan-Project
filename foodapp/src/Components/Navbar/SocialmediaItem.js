import React from "react";
import "./Navbar.css";
const SocialmediaItem = ({ socialMediaLinks }) => 
  <div>
    <ul className="social-media-desktop">
      {socialMediaLinks?.map(({ id, url, Icon, className }) => (
        <li key={`navbarsocial-${id}`}>
          <a href={url} target="">
            <Icon className={className} />
          </a>
        </li>
      ))}
    </ul>
  </div>


export default SocialmediaItem;
