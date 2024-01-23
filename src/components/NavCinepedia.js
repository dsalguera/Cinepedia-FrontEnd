import React, { useState } from 'react';


const NavCinepedia = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">Logo</div>
          <div className="md:hidden flex items-center">
            {/* Hamburger Menu Button */}
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute top-14 right-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 w-screen text-center">
                {/* Dropdown menu on small screens */}
                <a href="/" className="block text-white text-lg">Home</a>
                <a href="/movies" className="block text-white text-lg">Movies</a>
                <a href="/manage" className="block text-white text-lg">Manage</a>
              </div>
            )}
          </div>
          <div className="hidden md:flex space-x-4">
            {/* Show on larger screens */}
            <a href="/" className="text-white text-lg">Home</a>
            <a href="/movies" className="text-white text-lg">Movies</a>
            <a href="/manage" className="text-white text-lg">Manage</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavCinepedia;
