import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Keelan Christie</h1>
        <p>Get in touch with me for any questions or inquiries into my work and what I can do for you.</p>
      </header>
      <div className="contact-content">
        <h2>Email</h2>
          {/* Clickable Email */}
          <a
          href="mailto:keelanchristie01@gmail.com"
          className="email-link"
        >
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          keelanchristie01@gmail.com
        </a>
        <p></p>
        <h2>Mobile Number</h2>
        <p>+353 0876808420</p>
        <h2>LinkedIn</h2>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/keelan-christie-design/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <span className="linkedin-text">Keelan Christie</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
