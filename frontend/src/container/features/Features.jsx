import React, { useState } from "react";
import "./features.css";

const Features = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="temple__community section__padding" id="community">
      <div className="temple__community-leftArrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="temple__community-rightArrow" onClick={goToNext}>
        ❱
      </div>
      <div className="temple__community-slider" style={slideStyles}>
        <div className="slide-text">{slides[currentIndex].text}</div>
      </div>
      <div className="temple__community-slider_container">
        {slides.map((slide, slideIndex) => (
          <div
            className="temple__community-slider_container-child"
            key={slideIndex}
            style={{
              backgroundColor:
                currentIndex === slideIndex ? "#ff8a71" : "#81afdd",
            }}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
