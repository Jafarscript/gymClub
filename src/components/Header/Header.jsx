import React , { useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="header">
        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1658441369/gym-fitness-center-video-logo-social-media-design-template-f9566537b0445b719d2c9ae5b4264d3c_screen_onlplf.jpg" alt="gym" className='logo' />
        <div onClick={() => setMenuOpen(!menuOpen)} className='ham'>
          <GiHamburgerMenu />
          </div>
            <ul className={menuOpen ? 'mobile' : 'menu'} onClick={() => setMenuOpen(false)}>
          <li onClick={() => setMenuOpen(false)}><a href="#home">Home</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#programs">Programs</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#reason">Why us</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#plan">Plans</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#testy">Testimonials</a></li>
        </ul>
        
    </div>
  )
}

export default Header