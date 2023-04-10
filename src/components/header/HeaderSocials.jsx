import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {GrSpotify} from 'react-icons/gr'

import { IconContext } from 'react-icons'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/mjq4my" target="_blank"><BsGithub className ='icon'/></a>
        <a href="https://www.linkedin.com/in/michael-quinn33" target="_blank"><BsLinkedin className ='icon'/></a>
        <a href='https://open.spotify.com/user/dreqgjl3eu3oyv6guhunlg39y' target="_blank"><GrSpotify className ='icon'/></a>
        <a href="https://www.youtube.com/migsfigs" target="_blank"><GrYoutube className ='icon'/></a>
        <a href="https://www.instagram.com/vibe.ratingz" target="_blank"><BsInstagram className ='icon'x/></a>
        <a href="https://facebook.com/michael.quinn.921" target="_blank"><FaFacebookSquare className ='icon'/></a>
    </div>
  )
}

export default HeaderSocials