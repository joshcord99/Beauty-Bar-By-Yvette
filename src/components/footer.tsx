import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed bottom-0 right-0 p-4 bg-gray-200">
      <ul className="text-right">
        <li>
          <Link to="/termsofservice" className="text-blue-600 hover:underline">
            Terms of Services
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
