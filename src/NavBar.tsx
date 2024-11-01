import  './NavBar.css';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
        </div>
        <li><Link to="/">Home</Link></li> {/* Adding Home link */}
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ProfessionalKnowledge">Professional Knowledge</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Project">Projects</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/VideoGallery">Video Gallery</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
              </ul>
    </nav>
  );
}

export default NavBar;