import { useState } from 'react';

import Fixperts from '../assets/Fixperts.mp4';
import './Video Gallery.css';

function VideoGallery() {
  // useState hook to manage the current index of the displayed video
  const [index, setIndex] = useState(0);

  // An array of video URLs for the gallery
    const videos = [Fixperts];
    
    // Add more video URLs as needed

  // Function to go to the next video in the gallery
  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  // Function to go to the previous video in the gallery
  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  return (
    <div className="video-gallery-container">
      <header className="video-gallery-header">
        <h1>Video Gallery</h1>
        <p>Explore my collection of videos showcasing various topics and projects.</p>
      </header>
      {/* Display the current video */}
      <video
        src={videos[index]}
        controls
        className="video-player"
        key={videos[index]} // Ensures video reloads when changing
      />
      {/* Navigation buttons */}
      <div className="video-gallery-buttons">
        <button onClick={goToPreviousVideo} className="video-gallery-button">
          Previous
        </button>
        <button onClick={goToNextVideo} className="video-gallery-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default VideoGallery;