import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../Styles/Header.css";

function Header() {
  return (
    <div id="Header">
      <div className="HeaderTop">
        <img
          src={logo}
          alt="Kasa écrit en rouge avec une maison à la place du premier A"
          className="kasa-logo"
        />

        <ul className="menuNav">
          <li className="menuPuce">
            {" "}
            <Link to="/">Accueil</Link>{" "}
          </li>

          <li className="menuPuce">
            {" "}
            <Link to="/About">A Propos</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
