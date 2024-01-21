
import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (

    <nav className="">
      <div className="">
        <a href="/" className="">CinePedia</a>
        <div className="">
          <a href="/" >Home</a>
          <a href="/movies" className="">Movies</a>
          <a href="/manage" >Manage</a>
        </div>
        
      </div>
    </nav>
    
  );
}

export default Navbar;
