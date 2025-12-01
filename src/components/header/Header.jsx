import { NavLink } from 'react-router-dom';
import './header.css';
import {GrYoutube} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {GrSpotify} from 'react-icons/gr'

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
      <div className="spacer" />
      <div className="header_socials">
        <a href='https://linkedin.com/in/michael-quinn33' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/mjq4my' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href='https://youtube.com/migsfigs' target="_blank" rel="noopener noreferrer"><GrYoutube/></a>
        <a href='https://instagram.com/vibe.ratingz' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href='https://open.spotify.com/user/dreqgjl3eu3oyv6guhunlg39y' target="_blank" rel="noopener noreferrer"><GrSpotify/></a>
      </div>
    </header>
  );
};

export default Header;