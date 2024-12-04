import './Blog.css';
import Welcome from '../assets/welcome-blog.png';
import Photography from '../assets/photography-blog.png';
import Video from '../assets/video-blog.png';
import FormalEdit from '../assets/Formal-edit.jpg';
import AestheticEdit from '../assets/Aesthetic-edit.jpg';
import PassionEdit from '../assets/Passion-edit.jpg';
import BTS1 from '../assets/BTS1.png';
import BTS2 from '../assets/BTS2.png';
import BTS3 from '../assets/BTS3.png';
import BTS4 from '../assets/BTS4.png';
import BTS5 from '../assets/BTS5.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { RootState } from '../redux/store'; // RootState type for state access
import { trackView } from '../redux/analyticsSlice'; // Redux action for tracking views

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});
  const [reactions, setReactions] = useState<{ [key: number]: { [emoji: string]: number } }>({});

  const dispatch = useDispatch(); // Redux dispatch function
  const analytics = useSelector((state: RootState) => state.analytics); // Redux analytics state

  const handleAddComment = (postId: number) => {
    if (newComment.trim()) {
      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment],
      }));
      setNewComment('');
    }
  };

  const handleReact = (postId: number, emoji: string) => {
    setReactions((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [emoji]: (prev[postId]?.[emoji] || 0) + 1,
      },
    }));
  };

  const handleView = (postId: number) => {
    dispatch(trackView({ postId })); // Dispatch view tracking action
  };
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to My Blog',
      date: 'October 20, 2024',
      synopsis: 'This is my blog. Here, I will share my thoughts, projects, and more!',
      content: [
        'Welcome to my first blog post! Here, I will share my thoughts, projects, and much more. Stay tuned for updates as I explore new ideas and challenges.',
        'This blog is a reflection of my journey in product and interaction design, where creativity meets functionality.',
      ],
      image: Welcome,
    },
    {
      id: 2,
      title: 'Assignment 1 - Photography',
      date: 'October 23, 2024',
      synopsis: 'Exploring camera techniques for a photography assignment.',
      content: [
        'For this assignment I had to take 3 different photos which would require specific settings and conditions to fit the brief. I had to take a formal photo, an aesthetic photo and a photo that reflects my passion in life. I have added these photos to my Gallery Page.',
'Camera Settings for Original Photos:' ,
'Taken on a Canon EOS 250D with an 18-55mm Lens. ',
'Formal Photo: Lens: 24mm     Aperture: 5     Speed: 1/200 ISO: 800 ',
'Aesthetic Photo: Lens: 55mm     Aperture: 5.6     Speed: 1/400 ISO: 100 ',
'Passion Photo: Lens: 27mm     Aperture: 5     Speed: 1/8 ISO: 400. ',
'Firstly, I found taking the formal photo to be relatively straightforward however it still required some set up. I began by finding an area in my house that had a large, clean and neutral background. I then removed anything that might be in the shot and set up two main lights either side of the camera to better light the space. ',
'I also used large white foam board sheets to redirect the sunlight and use it as a bounce this allowed for better lighting from below to remove the harsh shadows caused by the main lights. This allowed me to achieve uniform lighting and make it as close to studio lighting as I could. ',
'Once I had created sufficient lighting, adjusting the settings took very little time. I played around with the ISO and aperture. I found a balance of an 800 ISO a shutter speed of 1/200 and a aperture of 5 made for the best settings. I took several photos until I found one I was happy with.  ',
'I then moved onto the next photo, the aesthetic shot. I knew I wanted to include my dog in the photo and that I wanted it to be taken outdoors. I went to a wooded area that had nice lighting and nice autumnal brown and dark greens colours. I took a multiple photos in different poses and areas of the woods, making sure to adjust my camera settings (aperture and ISO) accordingly as the lighting changed. I then chose the photo I felt looked the best with regards to lighting, colour and composition. ',
'Lastly, for the photo that reflected my passion, I wanted to portray my love of music. I originally wanted to take a picture with my bass guitar but unfortunately these didn’t come out as well as I had hope due to poor composition and I wasn’t happy with the backdrop of my house. So, I decided to use my record player as its design felt perfect for the aesthetic photo. I moved my record player from where I usually keep it to a nicer table and a less busy backdrop and began photographing it. ',
'I took some photos with me in the shot and some of just the record player. I tried some tests with a low shutter speed and the record spinning to try get a cool blurred effect but unfortunately it did not come out how I had planned so I went for a faster shutter speed for a static image. ',
'I preferred the photos where I was interacting with it so that’s the one I chose. I did struggle quite a bit with getting the camera at the right angle and the composition how I liked it to create a balanced photo. ',
'Once all the photos were taken, I brought them into Affinity Photo where I began editing them. ',
'For my Formal photo I adjusted my brightness by increasing it by 26% and I brought the contrast down by 5%, I also edited my S-Curve slightly and to add some finishing touches I cleaned up the background by covering up some dirt marks on the wall behind me using the blemish tool and some areas by hand with the brush tool making sure to colour match and blend as I went. ',
'For my Aesthetic photo I changed the brightness, increasing it by 24% and reduced the contrast by 18%, I changed the colour balances by increasing the Cyan by 19%, increasing the Green 5% and increasing the Blue by 18%, I adjusted my S-Curve to a smaller range and edited the shadows, decreasing by 24% and decreased the highlights by 18%. This was a bit of trial and error until I was happy with the final image. ',
'For my Passion photo I started by editing my brightness by increasing the value to 38% and my contrast was decreased by 18%, I then changed my S-Curve until I was satisfied and followed up with some colour balance changes, firstly increasing the Cyan by 26%, the Green by 2% and the Blue by 12%. After that, I still want fully happy with the colour balance so did a second pass, this time increasing the Cyan by a further 44%, the Magenta by 5% and the Blue by 22%. ',
],

      image: Photography,
      images: [FormalEdit, AestheticEdit, PassionEdit],

      
    },
    {
      id: 3,
      title: 'Assignment 2 - Product Demo Video',
      date: 'October 15, 2024',
      synopsis: 'Behind the scenes of our product demo video creation.',
      content: [
        'Behind the Scenes: Filming Our Product Demo Video', 
'For our latest project, our team has been hard at work creating a product demo video for our app—a map-based system that helps users find and explore abandoned and historical sites around Ireland. It’s a unique way to look into the country’s past, allowing users to find hidden places with stories and history, from their phones. As part of the project, I had the exciting experience of stepping into the role of both actor and director to help bring our idea to life.',
'From Concept to Screen: Our Creative Process',
'As the director, I was responsible for keeping the project on track, ensuring that each team member knew their roles and responsibilities. Our group began with a storyboard, outlining every shot we wanted to capture. This planning stage was crucial for creating a visual flow that would capture the app’s functionality. Practising our shots on a phone was another valuable step—it allowed us to test camera angles, lighting, and movement before filming at the actual location. Working together, we experimented to get each shot just right, ensuring every part supported our story.',
'Finding the Perfect Location: Cullane House, County Clare',
'A big part of the project involved selecting the location that would work with our app’s aesthetic. After some research, we chose Cullane House in County Clare—an abandoned building near a secluded lake, surrounded by a woods. This spot was perfect for showing both the mystery of Ireland’s history and the immersive, spooky experience our app aims to provide.',
'Building the Story: Script and Shot Plans',
'Once we locked in our location, we started refining the script and shot plans. The scene we created involved two friends—played by Devi and me—meeting up for a walk, with my character introducing the app and leading us on an adventure through the woods and into Cullane House. The storyline begins as a simple exploration but shifts into something eerie as I reveal the haunted history of the house.',
'Inside, we used a range of camera angles and points of view to make it feel like something was watching us, heightening the suspense and bringing the haunted ambience to life. I worked closely with the team to make sure we captured the perfect shots to convey the unsettling mood. In the climax, just as my character reveals the ghost rumours, a noise startles us, and we make a run for the exit, leaving viewers with a hint of the fun experiences our app offers.',
'Reflections on the Filming Experience',
'Directing this project was an very enjoyable challenge that taught me the importance of organisation, collaboration, and attention to detail. My role was to make sure everything stayed on track and that everyone had what they needed to perform their roles, from shot setup to acting. Working with my team to capture each scene perfectly was rewarding, and seeing our idea come to life was worth all the effort.',
'We knew this would be a multiple shot video, so we took a lot of care to focus on the composition of each shot. As we choose to do more shots than expected we were aware that we couldn’t let a single shot let us down and they all had to be perfect. We tried a lot of different angles and shooting styles, between stationary shots, tracking shots and following shots, we had a lot of fun working the techniques into the story. Another challenge we had to overcome was the indoor vs the outdoor shots as this meant we had to be very conscious or the sunlight and brightness conditions. At one point we had to stop and take lunch as the sun was too bright overexposing the shot.',
'After the filming was completed and we reviewed the footage, it was time to re-record the dialogue. This was something we found sparingly difficult to get right. With only the edited footage we had to time and plan the dialogue to match as best we could. We had to make some edits to the script to allow better flow and clarity for the video.',
'Through this experience, I’ve learnt not only about filmmaking but also about creating an immersive experience that combines storytelling with functionality. We’re excited to share the final product, hoping it encourages users to explore Ireland’s hidden histories with the same curiosity and excitement we felt while making this video.',

      ],
      image: Video,
      images: [BTS4, BTS2, BTS3, BTS1, BTS5,],
    },
  ];

  const openPost = (post: any) => {
    setSelectedPost(post);
    handleView(post.id); // Track view when "Read More" is clicked
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-container">
      <h1>Keelan's Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="blog-post"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="blog-post-content">
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-synopsis">{post.synopsis}</p>
              <button
                className="blog-read-more"
                onClick={() => openPost(post)}
              >
                Read More
              </button>
              <p>Views: {analytics[post.id]?.views || 0}</p> {/* Display view count */}
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="blog-modal-overlay" onClick={closePost}>
          <div
            className="blog-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="blog-modal-close" onClick={closePost}>
              &times;
            </button>
            <h2>{selectedPost.title}</h2>
            <p className="blog-date">{selectedPost.date}</p>
            <div className="blog-modal-text">
              {selectedPost.content.map((paragraph: string, index: number) => (
                <p key={index} className="blog-paragraph">
                  {paragraph}
                </p>
              ))}
              {selectedPost.images && selectedPost.images.length > 0 && (
                <div className="blog-image-gallery">
                  {selectedPost.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Blog Image ${index + 1}`}
                      className="blog-gallery-image"
                    />
                  ))}
                </div>
              )}
              {/* Emoji Reactions */}
              <div className="reactions-container">
                {['👍', '❤️', '😂', '😮', '😢', '👎'].map((emoji) => (
                  <button
                    key={emoji}
                    className="reaction-button"
                    onClick={() => handleReact(selectedPost.id, emoji)}
                  >
                    {emoji} {reactions[selectedPost.id]?.[emoji] || 0}
                  </button>
                ))}
              </div>

              {/* Comments Section */}
              <div className="comments-container">
                <h3>Comments</h3>
                {comments[selectedPost.id]?.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <p>{comment}</p>
                  </div>
                ))}
                <div className="comment-form">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="comment-input"
                  />
                  <button
                    onClick={() => handleAddComment(selectedPost.id)}
                    className="comment-button"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;