// import React from 'react'
import './footer.css'
import {GrYoutube} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {GrSpotify} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>MJQ Media</a>

      <u1 className='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='/#about'>About</a></li>
        <li><a href='/#experience'>Experience</a></li>
        <li><a href='/#contact'>Contact</a></li>
        <li><a href='/blog'>Blog</a></li>
      </u1>

      <div className="footer_socials">
        <a href='https://github.com/mjq4my' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href='https://youtube.com/migsfigs' target="_blank" rel="noopener noreferrer"><GrYoutube/></a>
        <a href='https://instagram.com/vibe.ratingz' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href='https://open.spotify.com/user/dreqgjl3eu3oyv6guhunlg39y' target="_blank" rel="noopener noreferrer"><GrSpotify/></a>
        <a href='https://linkedin.com/in/michael-quinn33' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; MJQMedia. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer