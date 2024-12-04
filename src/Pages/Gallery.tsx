import React, { useState } from 'react';
import Formal from '../assets/Formal-edit.jpg';
import Aesthetic from '../assets/Aesthetic-edit.jpg';
import Passion from '../assets/Passion-edit.jpg';
import BTS1 from '../assets/BTS1.png';
import BTS2 from '../assets/BTS2.png';
import BTS3 from '../assets/BTS3.png';
import BTS4 from '../assets/BTS4.png';
import BTS5 from '../assets/BTS5.png';
import FDP1 from '../assets/FDP.png';
import FDP2 from '../assets/FDP2.png';
import Wheel1 from '../assets/Wheelchair.png';
import Wheel2 from '../assets/Wheelchair2.png';
import Head1 from '../assets/Headphones_Render.jpg';
import Head2 from '../assets/Headphones_Instructions.jpg';
import Head3 from '../assets/Headphones_Poster.jpg';
import Head4 from '../assets/Headphones_Clay.jpg';
import Fix1 from '../assets/Fixperts.png';
import Fix2 from '../assets/Fixperts2.png';
import './Gallery.css';

interface Image {
  src: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: Image[] = [
    { src: Formal, title: 'Photography: Formal Head Shot' },
    { src: Aesthetic, title: 'Photography: Aesthetic' },
    { src: Passion, title: 'Photography: My Passion' },
    { src: BTS1, title: 'Product Demo: Behind the scenes ' },
    { src: BTS2, title: 'Product Demo: Behind the scenes' },
    { src: BTS3, title: 'Product Demo: Behind the scenes' },
    { src: BTS4, title: 'Product Demo: Behind the scenes' },
    { src: BTS5, title: 'Product Demo: App Interface' },
    { src: FDP1, title: 'BSc Final Year Project - Model' },
    { src: FDP2, title: 'BSc Final Year Project - Solidworks' },
    { src: Wheel1, title: 'Wheelchair Sci-Fi Film Prop - On Set' },
    { src: Wheel2, title: 'Wheelchair Sci-Fi Film Prop - Making Parts' },
    { src: Head1, title: 'Headphones - Affinity Render' },
    { src: Head2, title: 'Headphones - Instruction Manual' },
    { src: Head3, title: 'Headphones - Poster' },
    { src: Head4, title: 'Headphones - Clay Modelling' },
    { src: Fix1, title: 'Fixperts - Final Model' },
    { src: Fix2, title: 'Fixperts - Model Making' },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const goToPreviousImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Image Gallery</h1>
        <p>Explore our collection of images showcasing various topics and projects.</p>
      </header>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-thumbnail"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.title} className="thumbnail-image" />
            <p className="thumbnail-title">{image.title}</p>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-prev" onClick={goToPreviousImage}>
              &#8249;
            </button>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].title}
              className="lightbox-image"
            />
            <button className="lightbox-next" onClick={goToNextImage}>
              &#8250;
            </button>
            <p className="lightbox-title">{images[lightboxIndex].title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
