import React, { useState, useEffect } from 'react';

const Header = () => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  useEffect(() => {
    getMostPopularMovie();
  }, [])

  const [popularMovie, setPopularMovie] = useState({});

  const { 
    backdrop_path, 
    title, 
    overview, 
    release_date, 
    original_language, 
    vote_average 
  } = popularMovie;

  const getMostPopularMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setPopularMovie(data.results[0]);
  }

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
            <li className="headerMainMovie__li">{ release_date }</li>
            <li className="headerMainMovie__li">|</li>
            <li className="headerMainMovie__li">{ original_language }</li>
            <li className="headerMainMovie__li">
              <div className="rating">{ vote_average }</div>
            </li>
          </ul>
          <ul className="headerMainMovie__ul marginTop30">
            <li className="headerMainMovie__li">
              <button className="button button--lightBlue">View info</button>
            </li>
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