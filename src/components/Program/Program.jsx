import React from "react";
import "./Program.css";
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
        <div className="box">
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
        </div>
        <div className="box">
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
        </div>
        <div className="box">
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
        </div>
        <div className="box">
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
        </div>
      </div>
    </div>
  );
};

export default Program;
