/* eslint-disable react/prop-types */
import "./caraousel.css";
import LeftArrow from "../images/left-arrow.png";
import RightArrow from "../images/right-arrow.png";
import { useRef, useEffect, useState } from "react";

const CaraouselPage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // Create extended array with clones for infinite effect
  const extendedSlides = [...images, ...images, ...images];
  const slideCount = images.length;

  // Handle next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => {
      setIsTransitioning(false);
      // Reset position if we've reached the end of cloned slides
      if (currentIndex >= slideCount * 2 - 1) {
        setCurrentIndex(slideCount);
      }
    }, 500);
  };

  // Handle previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => {
      setIsTransitioning(false);
      // Reset position if we've reached the beginning of cloned slides
      if (currentIndex <= 0) {
        setCurrentIndex(slideCount);
      }
    }, 500);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + slideCount);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-advance slides
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  // Pause on hover
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calculate transform value
  const getTransformValue = () => {
    if (!trackRef.current) return 0;
    const slideWidth = trackRef.current.children[0]?.offsetWidth || 0;
    return -currentIndex * slideWidth;
  };

  // Get the "real" index for dot navigation
  const getActiveDotIndex = () => {
    return ((currentIndex % slideCount) + slideCount) % slideCount;
  };

  return (
    <div className="caraouselWrapper">
      <button className="arrow left" onClick={prevSlide}>
        <img src={LeftArrow} alt="left-arrow" />
      </button>
      <div
        className="imgContainer"
        ref={trackRef}
        style={{
          transform: `translateX(${getTransformValue()}px)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {extendedSlides.map((image) => {
          return (
            <div key={image.id} className="carouselSlide">
              <img src={image.img} alt={`img-${image.id}`} />
            </div>
          );
        })}
        <div>
          <img src={images[0].img} alt="clone-img" />
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}>
        <img src={RightArrow} alt="right-arrow" />
      </button>
      <div className="dotContainer">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === getActiveDotIndex() ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CaraouselPage;
