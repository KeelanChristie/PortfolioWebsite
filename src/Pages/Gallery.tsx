import React, { useState, useEffect } from 'react';

import './Gallery.css';


interface Image {

  src: string;

  title: string;

}


const ImageGallery: React.FC = () => {

  const [index, setIndex] = useState(0);


  // Define the images array with objects containing src and title

  const images: Image[] = [

    { src: './Formal.jpg', title: 'Formal Head Shot' },

    { src: './Aesthetic.jpg', title: 'Aesthetic Photo' },

    { src: './Passion.jpg', title: 'Photo of my Passion' },

    { src: './FDP.png', title: 'My Final Year Project - BSc' },

    { src: './Wheelchair.png', title: 'Film Prop - Wheelchair' },

    { src: './Headphones_Clay.jpg', title: 'Designing Headphones - Clay' },

    { src: './Headphones_Render.jpg', title: 'Designing Headphones - Rendered Images' },

    { src: './Headphones_Instructions.jpg', title: 'Designing Headphones - Instruction Manual' },

    { src: './Headphones_Poster.jpg', title: 'Designing Headphones - Poster' },

    { src: './Mouse_Main.jpg', title: 'DFM Mouse - Keyshot Render 1' },

    { src: './Mouse_Aux.jpg', title: 'DFM Mouse - Keyshot Render 2' },

    // Add more images as needed

  ];


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
