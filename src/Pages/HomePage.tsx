
import ProfileImage from '../assets/homepage_image_scaled.png';  // Example for profile image
import './HomePage.css'; // Link to your CSS file

function HomePage() {
  return (
    <div className="homepage-container">
  <div className="content-container">
    <div className="text-section">
      <h1>Keelan Christie</h1>
      <p>— Product and Interaction Designer</p>
    </div>
    <div className="image-section">
    <img src={ProfileImage} alt="Keelan Christie" className="profile-image" />
    </div>
  </div>
</div>
  );
}

export default HomePage;



