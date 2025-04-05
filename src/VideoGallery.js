import React, { useState } from "react";
import { FaThumbsUp, FaShare } from "react-icons/fa"; // Importing icons
import "./VideoGallery.css";
import roadmapVideo from './Data Science Roadmap.mp4';
import video2 from "./full stack.mp4";
import video3 from "./cyber.mp4";
import video4 from "./java.mp4";
import video5 from "./python.mp4";
import video6 from "./uiux.mp4";

const videos = [
  {
    id: 1,
    title: "Exploring Data Science",
    thumbnail: "https://t3.ftcdn.net/jpg/10/78/40/88/360_F_1078408878_aohvu4smWhUqd0fHBe01mV5wrszI0ETU.jpg",
    thumbnailDescription: "A quick dive into data science fundamentals.",
    playerDescription: "Join us on an incredible journey through data science techniques and analytics. Learn about AI, ML, and more!",
    duration: "10:30",
    videoUrl: roadmapVideo  // Valid MP4 URL
  },
  {
    id: 2,
    title: "Modern Full Stack",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
    thumbnailDescription: "Best practices for web developers.",
    playerDescription: "Learn the latest web development techniques and best practices from industry experts. Get insights into HTML, CSS, JS, and more.",
    duration: "23:45",
    videoUrl: video2 // Replaced with a valid MP4 URL
  },
  {
    id: 3,
    title: "What is Cyber Security?",
    thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/neon-neon-cyber-security-youtube-thumbnail-design-template-5cc92f51b671a497564a98c90dfa0c41_screen.jpg?ts=1728489721",
    thumbnailDescription: "A beginner-friendly intro to cybersecurity.",
    playerDescription: "Cybersecurity is crucial in the digital age. Learn about ethical hacking, malware protection, encryption, and how to stay safe online.",
    duration: "23:45",
    videoUrl: video3
  },
  {
    id: 4, // Changed ID from 3 → 4 (Fix duplicate ID)
    title: "Know about Java!",
    thumbnail: "https://media.geeksforgeeks.org/wp-content/uploads/20241128180606809838/Java-Tutorial.png",
    thumbnailDescription: "A beginner-friendly intro to Java programming.",
    playerDescription: "Java is a powerful programming language used for web, mobile, and enterprise applications. Learn about its features, OOP principles, and how to start coding in Java.",
    duration: "23:45",
    videoUrl: video4
  },
  {
    "id": 5, 
    "title": "What is Python?",
    "thumbnail": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200623173636/Python-Tutorial1.png",
    "thumbnailDescription": "A beginner-friendly intro to Python programming.",
    "playerDescription": "Python is a versatile programming language used in web development, data science, AI, and automation. Learn about its syntax, features, and how to start coding in Python.",
    "duration": "20:15",
    "videoUrl": video5
  },
  {
    "id": 6,
    "title": "What is UI/UX?",
    "thumbnail": "https://cdn01.alison-static.net/courses/6811/alison_courseware_intro_6811.jpg",
    "thumbnailDescription": "A beginner-friendly introduction to UI/UX design.",
    "playerDescription": "Learn the fundamentals of UI/UX design, including user research, wireframing, prototyping, and design principles. Discover how to create intuitive and visually appealing user experiences.",
    "duration": "18:30",
    "videoUrl": video6
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    if (selectedVideo) {
      navigator.clipboard.writeText(selectedVideo.videoUrl);
      alert("Video link copied to clipboard!");
    }
  };

  return (
    <div className="video-gallery-container">
      {selectedVideo ? (
        <div className="video-player-container">
          <div className="video-wrapper">
            <video controls className="video-player">
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="video-title">{selectedVideo.title}</h2>
            <p className="video-description">{selectedVideo.playerDescription}</p>
          
            
            {/* Like & Share Buttons */}
            <div className="video-actions">
              <button className="like-button" onClick={handleLike}>
                <FaThumbsUp /> Like ({likes})
              </button>
              <button className="share-button" onClick={handleShare}>
                <FaShare /> Share
              </button>
            </div>
          </div>

          <button onClick={() => setSelectedVideo(null)} className="back-button">
            Back to Videos
          </button>
        </div>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
              <div className="thumbnail-container">
                <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                <span className="duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3 className="video-card-title">{video.title}</h3>
                <p className="video-card-description">{video.thumbnailDescription}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;