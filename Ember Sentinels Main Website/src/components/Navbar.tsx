import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Flame, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [docDropdownOpen, setDocDropdownOpen] = useState(false);
  const [mobileDocOpen, setMobileDocOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-scarlet-600 hexagon flex items-center justify-center">
            <Flame className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900">Ember Sentinels</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? 'text-scarlet-600'
                  : 'text-gray-700 hover:text-scarlet-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/solution"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? 'text-scarlet-600'
                  : 'text-gray-700 hover:text-scarlet-600'
              }`
            }
          >
            Solution
          </NavLink>
          <NavLink
            to="/problem"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? 'text-scarlet-600'
                  : 'text-gray-700 hover:text-scarlet-600'
              }`
            }
          >
            Problem
          </NavLink>

          {/* Documentation Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDocDropdownOpen(!docDropdownOpen)}
              className="font-medium text-gray-700 hover:text-scarlet-600 transition-colors flex items-center gap-1 focus:outline-none focus:text-scarlet-600"
              aria-expanded={docDropdownOpen}
              aria-haspopup="true"
            >
              Documentation
              <ChevronDown size={16} className={`transition-transform ${docDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {docDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setDocDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200 z-50">
                  <Link
                    to="/documentation"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-scarlet-600 transition-colors focus:bg-gray-100 focus:text-scarlet-600 focus:outline-none"
                    onClick={() => setDocDropdownOpen(false)}
                  >
                    Documentation Home
                  </Link>
                  <Link
                    to="/documentation/research"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-scarlet-600 transition-colors focus:bg-gray-100 focus:text-scarlet-600 focus:outline-none"
                    onClick={() => setDocDropdownOpen(false)}
                  >
                    Research Paper
                  </Link>
                  <Link
                    to="/documentation/technical-drawings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-scarlet-600 transition-colors focus:bg-gray-100 focus:text-scarlet-600 focus:outline-none"
                    onClick={() => setDocDropdownOpen(false)}
                  >
                    Technical Drawings
                  </Link>
                </div>
              </>
            )}
          </div>

          <NavLink
            to="/ai-dashboard"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? 'text-scarlet-600'
                  : 'text-gray-700 hover:text-scarlet-600'
              }`
            }
          >
            AI Dashboard
          </NavLink>

          <NavLink
            to="/founder"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? 'text-scarlet-600'
                  : 'text-gray-700 hover:text-scarlet-600'
              }`
            }
          >
            Founder
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-scarlet-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-2">
          <div className="flex flex-col space-y-4 px-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? 'text-scarlet-600'
                    : 'text-gray-700 hover:text-scarlet-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/solution"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? 'text-scarlet-600'
                    : 'text-gray-700 hover:text-scarlet-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Solution
            </NavLink>
            <NavLink
              to="/problem"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? 'text-scarlet-600'
                    : 'text-gray-700 hover:text-scarlet-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Problem
            </NavLink>

            {/* Mobile Documentation Dropdown */}
            <div>
              <button
                onClick={() => setMobileDocOpen(!mobileDocOpen)}
                className="flex items-center justify-between w-full py-2 font-medium text-gray-700 hover:text-scarlet-600"
              >
                Documentation
                <ChevronDown size={16} className={`transition-transform ${mobileDocOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDocOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/documentation"
                    className="block py-2 text-gray-600 hover:text-scarlet-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Documentation Home
                  </Link>
                  <Link
                    to="/documentation/research"
                    className="block py-2 text-gray-600 hover:text-scarlet-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Research Paper
                  </Link>
                  <Link
                    to="/documentation/technical-drawings"
                    className="block py-2 text-gray-600 hover:text-scarlet-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Technical Drawings
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/ai-dashboard"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? 'text-scarlet-600'
                    : 'text-gray-700 hover:text-scarlet-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              AI Dashboard
            </NavLink>

            <NavLink
              to="/founder"
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? 'text-scarlet-600'
                    : 'text-gray-700 hover:text-scarlet-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Founder
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;