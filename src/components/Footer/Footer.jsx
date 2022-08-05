import React from 'react'
import './Footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="blur blur-f"></div>
      <div className="blur blur-f2"></div>

        <hr />
        <div className='foot'>
        <div className="icons">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
        </div>
        <div className="logo-f">
        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658441369/gym-fitness-center-video-logo-social-media-design-template-f9566537b0445b719d2c9ae5b4264d3c_screen_onlplf.jpg" alt="gym" className='logo' />
        </div>
        </div>
    </div>
  )
}

export default Footer