import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                Home
            </Link>
            <Link to="/" className='navbar-logo'>
                Blogs
            </Link>
            <Link to="/" className='navbar-logo'>
                Contact
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className= {click ? 'fast fa-times' : 'fas fa-bars'}/>

            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> </ul>
        </div>
    </nav>
  )
}

export default Navbar