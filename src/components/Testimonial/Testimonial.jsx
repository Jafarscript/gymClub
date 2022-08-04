import React, { useState } from 'react';
import './Testimonial.css';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

import { testimonials } from '../../data';

const Testimonial = () => {

  const [select, setSelect] = useState(0);
  const dataLength = testimonials.length;

  return (
    <div className="testy">
        <div className="left-s">
                <span>Testimonial</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                  {testimonials[select].review}
                </span>
                <span>
                  <span style={{color: 'var(--orange)'}}>
                  {testimonials[select].name} 
                  </span> {" "}
                  - {testimonials[select].status}
                </span>
        </div>
        <div className="right-s">
          <div></div>
          <div></div>
          <img src={testimonials[select].image} alt="" />

          <div className="arrows">
            <FaArrowLeft  onClick={() => {
              select === 0
              ? setSelect(dataLength - 1)
            : setSelect ((prev) => prev -1)}}/>
            <FaArrowRight onClick={() => {
              select === dataLength -1
              ? setSelect(0)
              : setSelect( (prev) => prev + 1)
            }} />
          </div>
        </div>
    </div>
  )
}

export default Testimonial