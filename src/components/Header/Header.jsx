import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658441369/gym-fitness-center-video-logo-social-media-design-template-f9566537b0445b719d2c9ae5b4264d3c_screen_onlplf.jpg" alt="gym" className='logo' />

        <ul className='menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header