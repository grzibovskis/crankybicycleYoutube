import './navbar.css'
import LOGO from '../../../asset/Images/LOGO.png'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  const [hamburger, setHamburger] = useState(false)

  return (
    <>
      <div className='header-menu'>
        <Link to="/"><img className='LOGO' src={LOGO} alt="" /></Link>
        <div className='container-hamburger-menu'> 
          <div className='hamburger-menu'
            onClick={ () => {setHamburger(!hamburger)}}
          ><MenuIcon sx={{fontSize: 50}}/></div>
          <ul className={hamburger ? "open" : ""}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/bicycles">BICYCLE</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/events">EVENTS</Link></li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar
