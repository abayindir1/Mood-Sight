import {Link} from "react-router-dom";
import "../Styles/Navbar.css"
const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">Moodus</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
