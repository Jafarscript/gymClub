import React from "react";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="left-h">
        <Header />
        {/* Best Ads */}
        <div className="best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Home text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In this club we will help build you ideal body for male and female
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>experts coaches</span>
          </div>
          <div>
            <span>+1080</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness progress</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart">
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658524427/2250px-Love_Heart_symbol.svg_s3ture.png" alt="heart-rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658525145/fashionable-handsome-young-man-with-hairstyle-tattoo-his-shoulder-tying-his-laces-sneakers-street-sunset_338491-15298_yli5h4-removebg-preview_palizp.png" alt="guy" className="hero-image" />

        <div className="calories">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
