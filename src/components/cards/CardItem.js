import React from 'react';
import { Link } from "react-router-dom";

const CardItem = ({movie: {backdrop_path, title, release_date, vote_average, id}}) => {


  const cardBackgroundImg = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w342${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundSize: "cover"
  }

  return (
    <div className="card movieCard">
      <div className="movieCard__image" style={ cardBackgroundImg }></div>
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