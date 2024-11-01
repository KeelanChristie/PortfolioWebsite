import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS for responsive layout and predefined styles
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript bundle (including Popper)
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import KeelanChristie from './assets/Keelan_Circle.png';
import Projects from './Pages/Project';
import Contact from './Pages/Contact';
import About from './Pages/About';
import HomePage from './Pages/HomePage'; // Import your new homepage
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import VideoGallery from './Pages/VideoGallery';
import Education from './Pages/Education';
import ProfessionalKnowledge from './Pages/Professional Knowledge';
import './App.css';
import './NavBar.css';

function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <div className="navbar-logo">
            <div className="logo-container">
              <img src={KeelanChristie} alt="Logo" />
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
            </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage route */}
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/VideoGallery" element={<VideoGallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ProfessionalKnowledge" element={<ProfessionalKnowledge />} />
                <Route path="/Education" element={<Education />} />
      </Routes>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Keelan Christie. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
