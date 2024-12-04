import './Project.css';
import { useState, } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { trackView } from "../redux/analyticsSlice";
import Zephyr1 from '../assets/FDP.png';
import Zephyr2 from '../assets/FDP2.png';
import Wheelchair1 from '../assets/Wheelchair.png';
import Wheelchair2 from '../assets/Wheelchair2.png';
import Headphones1 from '../assets/Headphones_Render.jpg';
import Headphones2 from '../assets/Headphones_Clay.jpg';
import Headphones3 from '../assets/Headphones_Instructions.jpg';
import Headphones4 from '../assets/Headphones_Poster.jpg';
import Fixperts1 from '../assets/Fixperts.png';
import Fixperts2 from '../assets/Fixperts2.png';

function Project() {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();
  const analytics = useSelector((state: RootState) => state.analytics);

  // Function to open the lightbox
  const openLightbox = (images: string[], index: number, postId: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxVisible(true);
    dispatch(trackView({ postId }));
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? lightboxImages.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === lightboxImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-container">
      <header className="project-header">
        <h1>My Projects</h1>
        <p>Explore my projects from Product Design, film production, 3D printing, and more.</p>
      </header>

      <div className="project-content">
        {/* Final Year Project */}
        <section>
          <h2>BSc Final Year Project</h2>
          <div className="project-item">
            <img
              src={Zephyr1}
              className="project-image"
              onClick={() => openLightbox([Zephyr1, Zephyr2], 0, 1)} 
            />
            <div className="project-text">
            <p>
              Zephyr is a practical solution for managing dust in workspaces where cleanliness is
              essential. This compact, lap-mounted device uses a high-speed motor to draw in dust and
              debris, keeping your workspace clear without frequent interruptions. The design channels
              dust directly into a collection chamber, which can be easily emptied with a quick twist,
              making cleanup simple and efficient. Zephyr is built to support uninterrupted workflow
              and maintain a tidy environment for any creative or technical task.
            </p>
            <p>Views: {analytics[1]?.views || 0}</p> {/* Replace 1 with the project ID */}
            </div>
          </div>
        </section>

        {/* Sci-Fi Wheelchair */}
        <section>
          <h2>Film Prop: Sci-Fi Wheelchair</h2>
          <div className="project-item">
            <img
              src={Wheelchair1}
              className="project-image"
              onClick={() => openLightbox([Wheelchair1, Wheelchair2], 0, 2)}
            />
            <div className="project-text">
            <p>
              During my Co-op placement, I was contacted by the Emerging Limerick Filmmakers (ELF) to
              create a sci-fi wheelchair for a short film. I began by sourcing an actual wheelchair and
              an antique wooden chair to design a fictional life support system with custom dials and
              gauges made from 3D-printed and laser-cut parts. The finished product was weathered for
              authenticity and delivered to the set, where I worked alongside the crew during filming.
              Seeing the final film brought immense pride.
            </p>
            <p>Views: {analytics[2]?.views || 0}</p>
            </div>
          </div>
        </section>

        {/* Designing Headphones */}
        <section>
          <h2>Designing Headphones</h2>
          <div className="project-item">
            <img
              src={Headphones1}
              className="project-image"
              onClick={() => openLightbox([Headphones1, Headphones2, Headphones3, Headphones4], 0, 3)}
            />
            <div className="project-text">
            <p>
              This project focused on learning clay modeling for quick concept iterations. I used
              sketching and clay modeling to create a headset for a fictional company, "Odio,"
              emphasizing modern nostalgia. My process involved mood boarding, iterative sketching, and
              logo design. I finalized the project with a mock-up of an instruction manual for the
              headphones' envisioned functionality.
            </p>
            <p>Views: {analytics[3]?.views || 0}</p>
            </div>
          </div>
        </section>

        {/* Fixperts Design Challenge */}
        <section>
          <h2>Fixperts - Design Challenge</h2>
          <div className="project-item">
            <img
              src={Fixperts1}
              className="project-image"
              onClick={() => openLightbox([Fixperts1, Fixperts2], 0, 4)}
            />
            <div className="project-text">
            <p>
              This innovative roller device was created to help my sister manage arthritis-related foot
              pain. Developed as part of the Fixperts Challenge, my teammate and I designed,
              prototyped, and refined the tool to provide accessible, at-home relief. The roller
              promotes circulation and reduces pain, empowering users like my sister to enhance their
              mobility and overall quality of life.
            </p>
            <p>Views: {analytics[4]?.views || 0}</p>
            </div>
          </div>
        </section>
      </div>
  {/* Lightbox Overlay */}
      {lightboxVisible && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-prev" onClick={prevImage}>
              &#8249;
            </button>
            <img
              src={lightboxImages[currentImageIndex]}
              alt="Project Lightbox"
              className="lightbox-image"
            />
            <button className="lightbox-next" onClick={nextImage}>
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;