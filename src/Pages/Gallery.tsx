import React, { useState, useEffect } from 'react';
import Formal from '../assets/Formal.jpg';
import Aesthetic from '../assets/Aesthetic.jpg';
import Passion from '../assets/Passion.jpg';
import './Gallery.css';
interface Image { /* Created an Image interface to define the structure of the image objects. */
  src: string;
  title: string;
}

interface Image {

  src: string;

  title: string;

}


const ImageGallery: React.FC = () => {

  const [index, setIndex] = useState(0);


  // Define the images array with objects containing src and title

  const images: Image[] = [
    { src: Formal, title: 'Formal Head Shot' }, //added the capability of dsiplaying a title under each image in the gallery
    { src: Aesthetic, title: 'Aesthetic' },
    { src: Passion, title: 'My Passion' },
  ];

    // Add more images as needed




  const goToNextImage = () => {

    setIndex((prevIndex) => (prevIndex + 1) % images.length);

  };


  const goToPreviousImage = () => {

    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  };


  const handleKeyDown = (event: KeyboardEvent) => {

    if (event.key === 'ArrowRight') {

      goToNextImage();

    } else if (event.key === 'ArrowLeft') {

      goToPreviousImage();

    }

  };


  useEffect(() => {

    window.addEventListener('keydown', handleKeyDown);

    return () => {

      window.removeEventListener('keydown', handleKeyDown);

    };

  }, []);


  return (

    <div className="gallery-container">

      <header className="gallery-header">

        <h1>Image Gallery</h1>

        <p>Explore our collection of images showcasing various topics and projects.</p>

      </header>

      <img

        src={images[index].src}

        alt={`Gallery Image ${index + 1}`}

        className="gallery-image"

      />

      <h2 className="image-title">{images[index].title}</h2>

      <div className="gallery-buttons">

        <button onClick={goToPreviousImage} className="gallery-button">

          Previous

        </button>

        <button onClick={goToNextImage} className="gallery-button">

          Next

        </button>

      </div>

    </div>

  );

};


export default ImageGallery;
