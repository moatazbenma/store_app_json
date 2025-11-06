import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white shadow-lg backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition">
            MTZ STORE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold items-center">
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link to="/products" className="hover:text-yellow-300 transition">Products</Link>
            <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-purple-800 via-indigo-800 to-pink-700 text-center py-4 space-y-3">
            <Link to="/" className="block hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" className="block hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-20 md:h-20"></div>
    </>
  );
}

export default Navbar;
