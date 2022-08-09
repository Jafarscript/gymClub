import React from "react";
import "./Program.css";
import { motion } from "framer-motion";
import { FaRunning } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { AiFillFire } from "react-icons/ai";
import { RiHeartPulseLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

const Program = () => {
  return (
    <div className="programs" id="programs">
      {/* Programs */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="boxes">
        <motion.div className="box" initial={{scale: 0.2, opacity: 0}} whileInView={{scale: 1, opacity: 1}}  transition={{duration: 0.5}}>
          <span className="icon">
            <CgGym />
          </span>
          <span className="heading">Strength Training</span>
          <span className="detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptatum autem.
          </span>
          <div className="join">
            <span>join now</span>
            <span>
              <BsArrowRightShort />
            </span>
          </div>
        </motion.div>
        <motion.div className="box" initial={{scale: 0.2, opacity: 0}} whileInView={{scale: 1, opacity: 1}}  transition={{duration: 0.5, delay: 0.1}}>
          <span className="icon">
            <FaRunning />
          </span>
          <span className="heading">Cardle Training</span>
          <span className="detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptatum autem.
          </span>
          <div className="join">
            <span>join now</span>
            <span>
              <BsArrowRightShort />
            </span>
          </div>
        </motion.div>
        <motion.div className="box" initial={{scale: 0.2, opacity: 0}} whileInView={{scale: 1, opacity: 1}}  transition={{duration: 0.5, delay: 0.2}}>
          <span className="icon">
            <AiFillFire />
          </span>
          <span className="heading">Fat Burning</span>
          <span className="detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptatum autem.
          </span>
          <div className="join">
            <span>join now</span>
            <span>
              <BsArrowRightShort />
            </span>
          </div>
        </motion.div>
        <motion.div className="box" initial={{scale: 0.2, opacity: 0}} whileInView={{scale: 1, opacity: 1}}  transition={{duration: 0.5, delay: 0.3}}>
          <span className="icon">
            <RiHeartPulseLine />
          </span>
          <span className="heading">Health Fitness</span>
          <span className="detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptatum autem.
          </span>
          <div className="join">
            <span>join now</span>
            <span>
              <BsArrowRightShort />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Program;
