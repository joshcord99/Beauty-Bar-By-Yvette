import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-3xl flex justify-center bg-gray-100 py-4">
      <ul className="flex flex-row space-x-36">
        <li>
        <Link to="/home">
      <img className="w-70 h-25" src="/assets/logo.png" alt="Logo" />
    </Link>
        </li>
        <li>
          <Link to="/specials">Discounts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        {/* <li>
          <Link to="/hoursofoperation">Hours</Link>
        </li> */}
        <li>
          <a
            href="https://bookwithsolashy.as.me/schedule/7156e9af"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule an Appointment
          </a>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
