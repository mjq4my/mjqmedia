import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {GrYoutube} from 'react-icons/gr'
import {RiSpotifyLine} from "react-icons/ri"

const IntroSocials = () => {
  return (
    <div className='intro_socials'>
        <a href="https://github.com/mjq4my" target="_blank"><BsGithub className ='icon' color="black"/></a>
        <a href="https://www.linkedin.com/in/michael-quinn33" target="_blank"><BsLinkedin className ='icon' color="blue"/></a>
        <a href='https://open.spotify.com/user/dreqgjl3eu3oyv6guhunlg39y' target="_blank"><RiSpotifyLine className ='icon' color="green"/></a>
        <a href="https://www.youtube.com/migsfigs" target="_blank"><GrYoutube className ='icon' color = "red"/></a>
        <a href="https://www.instagram.com/vibe.ratingz" target="_blank"><BsInstagram className ='icon' color="black"/></a>
    </div>
  )
}

export default IntroSocials