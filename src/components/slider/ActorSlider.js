import React from 'react'
import Slider from "react-slick";
import svg from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import notFoundImage from "../../images/no_image_found.png";

const ActorSlider = ({ cast }) => {

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

  return (
    <div className="container">
      <div className="heading">
        <h3 className="heading-title">CAST</h3>
        <p className="heading__content">
          Iure ab, accusantium corrupti quos aspernatur qui.
        </p>
      </div>
      <Slider {...settings} className="actorSlider">
      {cast.map(actor => (
        <div key={actor.id} className="actorSliderSlide">
          <Link to={`/actor-summary/${actor.id}`} className="actorSliderSlide__link">
            {actor.profile_path === null ?  
              <img src={notFoundImage} className="actorSliderSlide__image" alt={ actor.name } title={ actor.name }></img> : 
              <img className="actorSliderSlide__image" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={ actor.name } title={ actor.name } />}
            <span className="actorSliderSlide__name">{ actor.name }</span>
          </Link>
        </div>
      ))}
      </Slider>
    </div>
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

export default ActorSlider;
