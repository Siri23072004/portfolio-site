import { useState } from "react";

function Navbar() {
  const links = ["Home", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-50 shadow-md">
      {/* 1. Changed 'justify-between' to 'justify-start' to move items left.
          2. Added 'gap-12' to create space between "Siri Naik" and the links.
      */}
      <div className="max-w-7xl mx-auto flex justify-start items-center px-6 py-4 gap-12">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-blue-400 whitespace-nowrap">
          Siri Naik
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="hover:text-blue-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - pushed to the right using 'ml-auto' */}
        <div 
          className="md:hidden ml-auto text-white cursor-pointer text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 border-t border-gray-800">
          {links.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="hover:text-blue-400 transition-colors text-lg"
                onClick={() => setMenuOpen(false)} // Closes menu when a link is clicked
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;