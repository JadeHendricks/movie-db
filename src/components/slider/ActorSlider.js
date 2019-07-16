import React from 'react'
import Slider from "react-slick";
import svg from "../../images/sprite.svg";

const ActorSlider = () => {

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
        <h3 className="heading-title">Lorem ipsum dolor sit.</h3>
        <p className="heading__content">
          Iure ab, accusantium corrupti quos aspernatur qui.
        </p>
      </div>
      <Slider {...settings} className="actorSlider">
        <div className="actorSliderSlide">
          <a href="/" className="actorSliderSlide__link">
            <img className="actorSliderSlide__image" src="https://image.tmdb.org/t/p/w185/xxPMucou2wRDxLrud8i2D4dsywh.jpg" alt="" />
            <span className="actorSliderSlide__name">Tom Hanks</span>
          </a>
        </div>
        <div className="actorSliderSlide">
          <a href="/" className="actorSliderSlide__link">
            <img className="actorSliderSlide__image" src="https://image.tmdb.org/t/p/w185/xxPMucou2wRDxLrud8i2D4dsywh.jpg" alt="" />
            <span className="actorSliderSlide__name">Tom Hanks</span>
          </a>
        </div>
        <div className="actorSliderSlide">
          <a href="/" className="actorSliderSlide__link">
            <img className="actorSliderSlide__image" src="https://image.tmdb.org/t/p/w185/xxPMucou2wRDxLrud8i2D4dsywh.jpg" alt="" />
            <span className="actorSliderSlide__name">Tom Hanks</span>
          </a>
        </div>
        <div className="actorSliderSlide">
          <a href="/" className="actorSliderSlide__link">
            <img className="actorSliderSlide__image" src="https://image.tmdb.org/t/p/w185/xxPMucou2wRDxLrud8i2D4dsywh.jpg" alt="" />
            <span className="actorSliderSlide__name">Tom Hanks</span>
          </a>
        </div>
        <div className="actorSliderSlide">
          <a href="/" className="actorSliderSlide__link">
            <img className="actorSliderSlide__image" src="https://image.tmdb.org/t/p/w185/xxPMucou2wRDxLrud8i2D4dsywh.jpg" alt="" />
            <span className="actorSliderSlide__name">Tom Hanks</span>
          </a>
        </div>
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
