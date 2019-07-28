import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Header = ({ movie: { backdrop_path, title, overview, release_date, original_language, vote_average, id } }) => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  const [video, setVideo] = useState("");

  const headerBackgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }

  useEffect(() => {
    fetchVideos(id);
  }, [id]);

  const fetchVideos = async (id) => {
    if(!id) return;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    if(!data.results[0]) return;
    setVideo(data.results[0].key);
  }

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
                <Link to={`/movie-summary/${id}`} className="button button--lightBlue">View info</Link>
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