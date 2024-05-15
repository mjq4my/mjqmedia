import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../images/grandcanyon01.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Michael Quinn</h1>
        <h4 className="text-light">Engineer and Blogger</h4>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={me} alt={me} />
        </div>

        {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}

      </div>
    </header>
  )
}

export default Header