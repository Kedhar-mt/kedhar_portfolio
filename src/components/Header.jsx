import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0  z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer hover:text-teal-500 transition duration-300">
          Kedhareswar Matha
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <HashLink
              to="/#about"
              smooth
              className="text-lg text-white transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#skills"
              smooth
              className="text-lg text-white transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
            >
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/experience"
              className="text-lg text-white transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
            >
              Experience
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#works"
              smooth
              className="text-lg text-white transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
            >
              Works
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              smooth
              className="text-lg text-white transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
            >
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-xl hamburger"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-0 right-0 w-full bg-gray-800 text-white p-6 z-50"
        >
          <ul className="space-y-4 text-center">
            <li>
              <HashLink
                to="/#about"
                smooth
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#skills"
                smooth
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
              >
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#works"
                smooth
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
              >
                Works
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg transition duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
