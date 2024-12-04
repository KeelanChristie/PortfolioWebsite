import "./Video Gallery.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addComment } from "../redux/commentsSlice";
import { reactToPost } from "../redux/reactionsSlice";
import { trackView } from "../redux/analyticsSlice"; // Import the trackView action
import Fixperts from "../assets/Fixperts.mp4";
import Demo from "../assets/BackTrackVideoFinal.mp4";
import { useState } from "react";

interface Video {
  src: string;
  title: string;
  description: string;
}

function VideoGallery() {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  // Redux state for comments, reactions, and analytics
  const comments = useSelector((state: RootState) => state.comments.comments);
  const reactions = useSelector((state: RootState) => state.reactions);
  const analytics = useSelector((state: RootState) => state.analytics);

  // Video array
  const videos: Video[] = [
    {
      src: Demo,
      title: "Product Demo Video - App in Context",
      description:
        "This product demo video showcases our app, a unique tool designed to encourage exploration of Ireland's forgotten abandoned and historical sites, each rich with stories and hidden histories. The app guides users to these intriguing locations, blending technology and curiosity to uncover the past. In the video, we follow two friends as they use the app to visit Cullane House, an abandoned lakeside property surrounded by woods and steeped in haunting folklore. Created to highlight the app’s immersive functionality, the video demonstrates how it connects users to Ireland’s hidden heritage through an engaging and atmospheric narrative, bringing history to life in a modern and interactive way.",
    },
    {
      src: Fixperts,
      title: "Fixperts - Design Challenge",
      description:
        "This video showcases the Fixperts design challenge project. A compact roller device was developed to assist with arthritis-related pain. I am very happy to say our project was even put nominated for the final for the Fixperts Design Award.",
    },
  ];

  // Add comment
  const handleAddComment = (videoIndex: number) => {
    if (newComment.trim()) {
      dispatch(addComment({ id: Date.now(), postId: videoIndex, content: newComment }));
      setNewComment("");
    }
  };

  // Add reaction
  const handleReact = (videoIndex: number, emoji: string) => {
    dispatch(reactToPost({ postId: videoIndex, emoji }));
  };

  // Track view when the video is played
  const handleVideoPlay = (videoIndex: number) => {
    dispatch(trackView({ postId: videoIndex }));
  };

  return (
    <div className="video-gallery-container">
      <header className="video-gallery-header">
        <h1>Video Gallery</h1>
        <p>Explore my collection of videos showcasing various topics and projects.</p>
      </header>

      <div className="video-gallery-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-gallery-item">
            {/* Trigger view tracking on video play */}
            <video
              src={video.src}
              controls
              className="video-player"
              onPlay={() => handleVideoPlay(index)} // Add onPlay event
            />
            <div className="video-description">
              <h2>{video.title}</h2>
              <p>{video.description}</p>

              {/* Display Views */}
              <p>Views: {analytics[index]?.views || 0}</p>

              {/* Reactions */}
              <div className="reactions">
                <span onClick={() => handleReact(index, "👍")}>
                  👍 {reactions[index]?.["👍"] || 0}
                </span>
                <span onClick={() => handleReact(index, "❤️")}>
                  ❤️ {reactions[index]?.["❤️"] || 0}
                </span>
                <span onClick={() => handleReact(index, "😂")}>
                  😂 {reactions[index]?.["😂"] || 0}
                </span>
              </div>

              {/* Comments */}
              <div className="comments-section">
                <h3>Comments</h3>
                <ul>
                  {comments
                    .filter((comment) => comment.postId === index)
                    .map((comment) => (
                      <li key={comment.id}>{comment.content}</li>
                    ))}
                </ul>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment"
                />
                <button onClick={() => handleAddComment(index)}>Submit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
