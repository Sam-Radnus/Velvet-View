import React from 'react'
import "./Tertiary/SeeAllSuggestions.css";
import { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import InfiniteScroll from 'react-infinite-scroll-component';
function SeeAllSuggestions(props) {
  let { title, medium, URL } = props;

  const [totalResults, setTotalResults] = useState(0);
  const gap = 16;

  const carouselRef = useRef(null);
  const contentRef = useRef(null);

  const [width, setWidth] = useState(964);
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
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    console.log(props.movies)
    getMovies();
  }, [URL])
  const getMovies = async () => {
    const url = `${URL}`;

    const data = await fetch(url);
    const parsedData = await data.json();
    setMovie(parsedData.results);
    console.log(parsedData.results);
    setTotalResults(parsedData.total_results);



  }
  return (
    <>
      <div style={{ marginLeft: "80px" }}>

        <div id="wrapper">
          <div id="carousel" ref={carouselRef}>
            <div id="content" ref={contentRef}>
              {movie.map(element => {
                if (props?.movies && (element?.title === props?.movies[0] || element?.title === props?.movies[1])) return <></>;
                else
                  return <div style={{ height: "224px", width: "146px", backgroundColor: 'rgb(23,22,27)', margin: '20px 0px 20px 0px' }} key={element.id} className="card" >
                    <Link onClick={() => {

                      document.getElementById('outlet').scrollIntoView(true)
                    }
                    } to={`Details/${medium}/${element.id}`} >
                      <img src={element.poster_path != null ? `https://image.tmdb.org/t/p/original/${element.poster_path}` : 'https://www.annsentitledlife.com/wp-content/uploads/2019/04/error-404-not-found-vertical.jpg'} alt="error404" className="card-img-top" />

                    </Link>
                  </div>

              }
              )}
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
          <button id="next" onClick={() => {
            handleNextClick()
          }} style={{ display: showNext ? "flex" : "none" }}>
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

      </div>
      <div id="outlet">  <Outlet /></div>
    </>
  )
}

SeeAllSuggestions.propTypes = {}

export default SeeAllSuggestions

