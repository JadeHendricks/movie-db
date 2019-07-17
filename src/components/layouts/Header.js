import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ movie: { backdrop_path, title, overview, release_date, original_language, vote_average, revenue, id } }) => {

  const headerBackgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }

  return (
    <header className="header" style={ headerBackgroundImage }>
      <div className="container">
        <div className="headerMainMovie">
          <h1 className="headerMainMovie__title uppercase">{ title }</h1>
          <p className="marginBottom20">{ overview }</p>
          <ul className="headerMainMovie__ul">
            <li className="headerMainMovie__li">{ release_date } { revenue }</li>
            <li className="headerMainMovie__li">|</li>
            <li className="headerMainMovie__li">{ original_language }</li>
            <li className="headerMainMovie__li">
              <div className="rating">{ vote_average }</div>
            </li>
          </ul>
          <ul className="headerMainMovie__ul marginTop30">
            { 
              window.location.href.endsWith(`${id}`) ? null : 
              <li className="headerMainMovie__li">
                <Link to={`/movie-summary/${id}`} className="button button--lightBlue">View info</Link>
              </li>
            }
            <li className="headerMainMovie__li">
              <button className="button button--white">Watch now</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;