import React from "react";
import "./about.scss";

export const About = () => {
  return(
    <div className="temp" id="about">
      <div className="about">
        <div className="about__img"></div>
        <div className="about__content">
          <h3>About Us</h3>
          <p className="description">Our restaurant has more than 20 years of experience in processing and serving tourists all over the world. Converging many expert chefs with 5-star certificates along with a team of dedicated and psychological staff. We have been expanding more restaurants nationwide and will aim to bring this brand to other countries in the near future.</p>
          <h5>Why choose us</h5>
          <div className="list">
            <ul className="description">
              <li>Very good!!</li>
              <li>Very good!!</li>
              <li>Very good!!</li>
              <li>Very good!!</li>
            </ul>
            <ul className="description">
              <li>Very good!!</li>
              <li>Very good!!</li>
              <li>Very good!!</li>
              <li>Very good!!</li>
            </ul>
          </div> 
        </div>
      </div>
    </div>
  );
};