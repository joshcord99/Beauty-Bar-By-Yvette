import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/home">
          <img className="w-40 h-auto" src="/assets/logo.png" alt="Logo" />
        </Link>
        <div className="hidden lg:flex flex-grow justify-end space-x-6">
          <Link
            to="/specials"
            className="p-2 hover:text-gray-400"
            style={{ fontFamily: "cursive" }}
          >
            Discounts
          </Link>
          <Link
            to="/contact"
            className="p-2 hover:text-gray-400"
            style={{ fontFamily: "cursive" }}
          >
            Contact
          </Link>
          <Link
            to="/services"
            className="p-2 hover:text-gray-400"
            style={{ fontFamily: "cursive" }}
          >
            Services
          </Link>
          <a
            href="https://bookwithsolashy.as.me/schedule/7156e9af"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-gray-400"
            style={{ fontFamily: "cursive" }}
          >
            Schedule an Appointment
          </a>
          <Link
            to="/home"
            className="p-2 hover:text-gray-400"
            style={{ fontFamily: "cursive" }}
          >
            Home
          </Link>
        </div>

        <button
          className="block lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-white text-3xl">&#9776;</span>{" "}
        </button>
      </div>

      <div
        className={`lg:hidden flex flex-col items-center bg-gray-900 absolute left-0 w-full transition-transform ${
          isOpen ? "top-16 opacity-100" : "top-[-500px] opacity-0"
        }`}
      >
        <Link
          to="/specials"
          className="block p-2 text-center hover:text-gray-400"
          style={{ fontFamily: "cursive" }}
        >
          Discounts
        </Link>
        <Link
          to="/contact"
          className="block p-2 text-center hover:text-gray-400"
          style={{ fontFamily: "cursive" }}
        >
          Contact
        </Link>
        <Link
          to="/services"
          className="block p-2 text-center hover:text-gray-400"
          style={{ fontFamily: "cursive" }}
        >
          Services
        </Link>
        <a
          href="https://bookwithsolashy.as.me/schedule/7156e9af"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 text-center hover:text-gray-400"
          style={{ fontFamily: "cursive" }}
        >
          Schedule an Appointment
        </a>
        <Link
          to="/home"
          className="block p-2 text-center hover:text-gray-400"
          style={{ fontFamily: "cursive" }}
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
