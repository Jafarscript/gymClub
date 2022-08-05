import React , { useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Header.css'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="header">
        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658441369/gym-fitness-center-video-logo-social-media-design-template-f9566537b0445b719d2c9ae5b4264d3c_screen_onlplf.jpg" alt="gym" className='logo' />
        {(menuOpen === false  && mobile === true )?
        (<div onClick={() => setMenuOpen(true)} className='ham'>
          <GiHamburgerMenu />
          </div>) : (
            <ul className='menu'>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Programs</li>
          <li onClick={() => setMenuOpen(false)}>Why us</li>
          <li onClick={() => setMenuOpen(false)}>Plans</li>
          <li onClick={() => setMenuOpen(false)}>Testimonials</li>
        </ul>
          ) }
        
    </div>
  )
}

export default Header