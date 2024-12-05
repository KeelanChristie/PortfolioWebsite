import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS for responsive layout and predefined styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle (including Popper)
import { Routes, Route, Navigate } from 'react-router-dom';
import Projects from './Pages/Project';
import Contact from './Pages/Contact';
import About from './Pages/About';
import HomePage from './Pages/HomePage'; 
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import VideoGallery from './Pages/Video Gallery';
import Education from './Pages/Education';
import ProfessionalKnowledge from './Pages/Professional Knowledge';
import Chat from './Pages/Chat';
import NavBar from './NavBar';
import './App.css';
import './NavBar.css';

function App() {
  return (
    <div>
      {/* Use the NavBar component */}
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomePage />} /> {/* Homepage route */}
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/VideoGallery" element={<VideoGallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ProfessionalKnowledge" element={<ProfessionalKnowledge />} />
        <Route path="/Education" element={<Education />} />

        {/* Redirect unmatched routes to homepage */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Keelan Christie. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
