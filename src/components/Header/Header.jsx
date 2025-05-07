import React from 'react';
import "./Header.scss";
import logo from "../../assets/image/Logo.png"; 

const Header = () => {
  return (
    <div className='HeaderMainContainer'>
      <div className='headerContent'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default Header