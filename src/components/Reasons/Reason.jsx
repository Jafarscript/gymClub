import React from 'react';
import './Reason.css'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import {SiAdidas, SiNewbalance, SiNike} from 'react-icons/si'

const Reason = () => {
  return (
    <div className="reason">
        <div className="left-r">
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1659044314/HTB18MzlXffsK1RjSszgq6yXzpXad_axzpzm.jpg" alt='A man in a gym' />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1659044319/istock-908985656-0_zcngdj.jpg" alt='A man in a gym' />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1659044316/depositphotos_291681054-stock-photo-muscular-man-workout-gym-strong_cickih.jpg" alt='A man in a gym' />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1659044314/workout-routines-for-men-1024x768_whpvx1.jpg" alt='A man in a gym' />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <span className="stroke-text">why</span>
                <span> choose us</span>
            </div>

            <div className="details-pr">
                <div>
                    <IoMdCheckmarkCircleOutline />
                    <span>we have over 500 equiment</span>
                </div>
                <div>
                    <IoMdCheckmarkCircleOutline />
                    <span>150+ coaches that trains you</span>
                </div>
                <div>
                    <IoMdCheckmarkCircleOutline />
                    <span>User friendly Machine available</span>
                </div>
                <div>
                    <IoMdCheckmarkCircleOutline />
                    <span>best offer in town</span>
                </div>
            </div>

            <span  className='part'>our partners</span>
            <div className="partners">
                <SiNewbalance />
                <SiAdidas />
                <SiNike />
            </div>
        </div>
    </div>
  )
}

export default Reason