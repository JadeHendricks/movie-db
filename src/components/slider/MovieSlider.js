import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import svg from "../../images/sprite.svg";
import notFoundImage from "../../images/no_image_found.png";

const MovieSlider = ({ slide }) => {

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    nextArrow:<NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } }, 
      { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 520, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const trimLength = (paragraph, length) => {
    return paragraph.slice(0, length);
  }

  return (
      <Slider {...settings} className="movieSlider">
      {slide.map(movie => (
        <div key={movie.id} className="movieSliderSlide">
          <div className="movieSliderSlide__image" style={{ backgroundImage: movie.backdrop_path ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` : `url(${notFoundImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
              <div className="movieSliderSlide__overlay">
                  <h5 className="movieSliderSlide__title">{ movie.title }</h5>
                  <p className="movieSliderSlide__desc">{ trimLength(movie.overview, 250) }...</p>
                  <Link to={`/movie-summary/${movie.id}`} className="movieSliderSlide__link" href="/">View More &rarr;</Link>
                  <span className="rating">{ movie.vote_average }</span>
              </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

const PreviousArrow = (props) => {
  return (
    <div className="movieSlider__arrowContainer movieSlider__arrowContainer--left slick-arrow prev" onClick={props.onClick}>
      <svg className="movieSlider__arrow">
        <use xlinkHref={`${svg}#icon-chevron-thin-left`}></use>
      </svg>
    </div>
  );
}

const NextArrow = (props) => {
  return (
    <div className="movieSlider__arrowContainer movieSlider__arrowContainer--right slick-arrow next" onClick={props.onClick}>
      <svg className="movieSlider__arrow">
        <use xlinkHref={`${svg}#icon-chevron-thin-right`}></use>
      </svg>
    </div>
  );
}

export default MovieSlider;
