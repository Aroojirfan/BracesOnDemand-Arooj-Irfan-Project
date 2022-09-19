import React from "react";
import "./Footer.css";
const FooterItems = ({ footerLinks }) => 
  <div>
    {footerLinks?.map(({ id, name, links }) => (
      <li key={`footer-${id}`}>
        <h2>{name}</h2>

        {links?.map(({ id, name, url }) => (
          <div key={`links-${id}`}>
            <a href={url}>{name}</a>
          </div>
        ))}
      </li>
    ))}
  </div>


export default FooterItems;
