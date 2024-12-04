import KeelanChristie from '../assets/Fishing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Left Image Section */}
      <img
        src={KeelanChristie}
        className="about-image"
      />

      {/* Right Text Content Section */}
      <div className="about-text-container">
        <header className="about-header">
          <h1>About Me</h1>
          <p>
            Hello! I'm Keelan Christie, a passionate Product and Interaction
            Designer. With a foundation in Product Design, I am advancing my
            studies in Interaction and Experience Design, aiming to create
            solutions that are innovative and user-focused.
          </p>
        </header>

        <section>
          <h2>My Journey</h2>
          <p>
            I began my career in product design, where I developed a solid
            understanding of creating functional and aesthetically pleasing
            designs. Currently, I’m developing new skills with a master’s in
            Interaction and Experience Design, exploring the interconnection of
            usability, empathy, and technology.
          </p>
        </section>

        <section>
          <h2>Design Philosophy</h2>
          <p>
            I believe that great design starts with understanding people. My
            approach revolves around human-centered design principles, ensuring
            that each project I undertake is both accessible and meaningful.
            Whether it's a physical product or a digital interface, I aim to
            create seamless, engaging experiences that add real value to users'
            lives.
          </p>
        </section>

        {/* Open Buttons */}
        <div className="download-buttons-container">
          <a
            href="/PortfolioWebsite/Keelan_Christie_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} className="download-icon" />
            <span>Portfolio</span>
          </a>
          <a
            href="/PortfolioWebsite/Keelan_Christie_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} className="download-icon" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
