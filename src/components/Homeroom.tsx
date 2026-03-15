import { useState } from "react";
import "../styles/Homeroom.css";

import video1 from "../assets/projects/videos/video4_compressed.mp4";
import video2 from "../assets/projects/videos/video1_compressed.mp4";
import video3 from "../assets/projects/videos/video2_compressed.mp4";
import video4 from "../assets/projects/videos/video3_compressed.mp4";


const Homeroom = () => {
  // Only videos now
  const slides = [video1, video2, video3, video4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="room">
      <div className="video-slider">
        <video
          key={currentSlide}
          src={slides[currentSlide]}
          className="slide-video"
          autoPlay
          muted
          loop
          controls
        />

        <div className="nav-buttons">
          <button className="nav prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homeroom;