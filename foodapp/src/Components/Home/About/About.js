import React from "react";

import Branches from "../Branches/Branches";
import "./About.css";
const About = () => (
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-6 p-25">
          <h3>About Us</h3>
          <h1>You prepare the food, we handle the rest</h1>
          <p>
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Claritas est etiam processus dynaus, quise sequitur
            mutationem consuetudium lectorum.Investigationes demonstraverunt
            lectores legere me lius quod ii legunt saepius. Claritas est etiam
            processus dynaus, quise sequitur mutationem consuetudium lectorum.
          </p>
        </div>

        <div className="about__img">
          <img
            className="about__img"
            src={process.env.PUBLIC_URL + "static/Images/FOODPANDA.jpeg"}
            alt=""
          />
        </div>
      </div>
    </div>
    {/* <Branches /> */}
  </div>
);

export default About;
