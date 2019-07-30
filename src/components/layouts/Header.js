import React, { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import HeaderContext from "../../context/header/headerContext";

const Header = ({ movie: { backdrop_path, title, overview, release_date, original_language, vote_average, id } }) => {

  const headerContext = useContext(HeaderContext);

  const { 
    video, 
    fetchTrailer} = headerContext;

  const headerBackgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }

  useEffect(() => {
    fetchTrailer(id);
    // eslint-disable-next-line
  }, [id]);

  const watchVideo = (e) => {
    e.target.setAttribute("href", `https://www.youtube.com/watch?v=${video}`);
  }

  return (
    <header className="header" style={ headerBackgroundImage }>
      <div className="container">
        <div className="headerMainMovie">
          <h1 className="headerMainMovie__title uppercase">{ title }</h1>
          <p className="marginBottom20">{ overview }</p>
          <ul className="headerMainMovie__ul">
            <li className="headerMainMovie__li">{ release_date }</li>
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
                <Link to={`/movie-summary/${id}`} className="button button--purple">View info</Link>
              </li>
            }
            <li className="headerMainMovie__li">
              <Link className="button button--white" target="_blank" onClick={watchVideo} to={""}>Watch Trailer</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;