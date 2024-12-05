import './NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <div className="navbar-logo">
            {/* Replaced "Home" text with the Home icon */}
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
              </Link>
            </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ProfessionalKnowledge">Professional Knowledge</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Project">Projects</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/VideoGallery">Video Gallery</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Chat">Chat</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
