import React from "react";
import { FaWeightHanging } from "react-icons/fa";
import { CgGym } from 'react-icons/cg';
import {GiWeightLiftingUp} from 'react-icons/gi'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./Plan.css";

const Plan = () => {
  return (
    <div className="plans">
      <div className="blur plans-blur"></div>
      <div className="blur plans-blur2"></div>
      <div className="plans-header">
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">Now withus</span>
      </div>
      <div className="plan">
        <div className="package">
          <FaWeightHanging />
          <span>Basic plan</span>
          <span className="price">$ 25</span>
          <div className="features">
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>2 hours of execution</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Free consultation to coaches</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Access to The Community</span>
            </div>
          </div>

          <div><span>{'See more details ->'}</span></div>
          <button className="btn">Join Now</button>

        </div>
        <div className="package center">
          <CgGym />
          <span>Basic plan</span>
          <span className="price">$ 25</span>
          <div className="features">
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>2 hours of execution</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Free consultation to coaches</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Access to The Community</span>
            </div>
          </div>

          <div><span>{'See more details ->'}</span></div>
          <button className="btn">Join Now</button>
        </div>

        <div className="package">
          <GiWeightLiftingUp />
          <span>Basic plan</span>
          <span className="price">$ 25</span>
          <div className="features">
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>2 hours of execution</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Free consultation to coaches</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Access to The Community</span>
            </div>
          </div>

          <div><span>{'See more details ->'}</span></div>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
