import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/specials">Specials</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/hoursofoperation">Hours</Link>
          </li>
          <li>
            <a href="https://bookwithsolashy.as.me/schedule/7156e9af">
              Schedule an Appointment
            </a>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
