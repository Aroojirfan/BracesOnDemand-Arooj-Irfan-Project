import React from "react";
import "./DownloadApp.css";

const DownloadApp = () => 
  <div className="download-container">
    <h1>Put us in your pocket</h1>
    <div className="download-container1">
      <h1>Download the food and groceries you love</h1>
      <p>
        It's all at your fingertips, the restaurants and shops you love.
        <br></br>Find the right food and groceries to suit your mood, and make
        the first bite last. Go ahead, download us.
      </p>

      <img
        src={process.env.PUBLIC_URL + "static/Images/mobileapp.webp"}
        alt=""
      />
      <a href="https://www.apple.com/app-store/">
        <button className="button button2">App Store</button>
      </a>
      <a href="https://www.apple.com/app-store/">
        <button className="button button1">Google Play</button>
      </a>
    </div>
  </div>


export default DownloadApp;
