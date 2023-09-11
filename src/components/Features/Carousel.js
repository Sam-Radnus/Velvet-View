import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const Carousel = (props) => {
  const gap = 16;

  const carouselRef = useRef(null);
  const contentRef = useRef(null);

  const [width, setWidth] = useState(carouselRef.current.offsetWidth);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const handleResize = () => {
    setWidth(carouselRef.current.offsetWidth);
  };

  const handleNextClick = () => {
    carouselRef.current.scrollBy(width + gap, 0);

    if (carouselRef.current.scrollWidth !== 0) {
      setShowPrev(true);
    }

    if (
      contentRef.current.scrollWidth - width - gap <=
      carouselRef.current.scrollLeft + width
    ) {
      setShowNext(false);
    }
  };

  const handlePrevClick = () => {
    carouselRef.current.scrollBy(-(width + gap), 0);

    if (carouselRef.current.scrollLeft - width - gap <= 0) {
      setShowPrev(false);
    }

    if (
      !(contentRef.current.scrollWidth - width - gap <=
        carouselRef.current.scrollLeft + width)
    ) {
      setShowNext(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="carousel" ref={carouselRef}>
        <div id="content" ref={contentRef}>
          {/* Add your image components here */}
        </div>
      </div>
      <button id="prev" onClick={handlePrevClick} style={{ display: showPrev ? "flex" : "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
        </svg>
      </button>
      <button id="next" onClick={handleNextClick} style={{ display: showNext ? "flex" : "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
