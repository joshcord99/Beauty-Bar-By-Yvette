import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/home">
          <img className="w-36 h-auto" src="/assets/logo.png" alt="Logo" />
        </Link>
        <div className="hidden lg:flex flex-grow justify-end space-x-10 text-xl lg:text-2xl font-semibold">
          <Link to="/specials" className="p-3 hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
            Discounts
          </Link>
          <Link to="/contact" className="p-3 hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
            Contact
          </Link>
          <Link to="/services" className="p-3 hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
            Services
          </Link>
          <a
            href="https://bookwithsolashy.as.me/schedule/7156e9af"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:text-gray-300"
            style={{ fontFamily: 'cursive' }}
          >
            Schedule an Appointment
          </a>
          <Link to="/home" className="p-3 hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
            Home
          </Link>
        </div>
        <button
          className="block lg:hidden p-2 text-4xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>
      <div
        className={`lg:hidden flex flex-col items-center bg-gray-900 w-full transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link to="/specials" className="block p-4 text-2xl hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
          Discounts
        </Link>
        <Link to="/contact" className="block p-4 text-2xl hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
          Contact
        </Link>
        <Link to="/services" className="block p-4 text-2xl hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
          Services
        </Link>
        <a
          href="https://bookwithsolashy.as.me/schedule/7156e9af"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 text-2xl hover:text-gray-300"
          style={{ fontFamily: 'cursive' }}
        >
          Schedule an Appointment
        </a>
        <Link to="/home" className="block p-4 text-2xl hover:text-gray-300" style={{ fontFamily: 'cursive' }}>
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
