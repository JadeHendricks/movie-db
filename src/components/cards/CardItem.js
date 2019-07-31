import React from 'react';
import { Link } from "react-router-dom";
import notFoundImage from "../../images/no_image_found.png";

const CardItem = ({movie: {backdrop_path, title, release_date, vote_average, id}}) => {
  
  let imagePath = 
    backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/w342${backdrop_path})`} 
    : { backgroundImage: `url(${notFoundImage})`}; 

  let imageOptions = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundSize: "cover"
  };

  let backdropImage = Object.assign(imagePath, imageOptions);

  return (
    <div className="card movieCard">
      <div className="movieCard__image" style={ backdropImage }></div>
      <div className="movieCard__content">
        <h5 className="movieCard__title">{ title }</h5>
          <span className="rating">{ vote_average }</span>
        <span className="movieCard__categories">{ release_date }</span>
        <Link to={`/movie-summary/${id}`} className="movieCard__viewmore" href="/">View More <span>&rarr;</span></Link>
      </div>
    </div>
  )
}

export default CardItem;