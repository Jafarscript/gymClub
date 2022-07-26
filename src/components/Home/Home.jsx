import React from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import "./Home.css";
import NumberCounter from 'number-counter';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* Best Ads */}
        <div className="best-ad">
        <span>the best fitness club in the town</span>
          <div></div>
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
            <span>
              <NumberCounter end={140} preFix='+' delay={4}/>
            </span>
            <span>experts coaches</span>
          </div>
          <div>
            <span><NumberCounter end={1080} start={900} preFix='+' delay={4}/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} preFix='+' delay={4}/></span>
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
        <a  href='#join-us'className="btn">Join Now</a>

        <motion.div className="heart" initial={{translateX: 100}} whileInView={{translateX: 0}} transition={{duration: 0.5}}>
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658524427/2250px-Love_Heart_symbol.svg_s3ture.png" alt="heart-rate" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658525145/fashionable-handsome-young-man-with-hairstyle-tattoo-his-shoulder-tying-his-laces-sneakers-street-sunset_338491-15298_yli5h4-removebg-preview_palizp.png" alt="guy" className="hero-image" />

        <div className="calories">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
