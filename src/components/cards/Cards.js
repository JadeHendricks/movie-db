import React, { useState, useEffect } from 'react';
import CardItem from "./CardItem";

const Cards = () => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getLatestMovies();
  }, []);

  const getLatestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    setNowPlaying(data.results.slice(0, 12));
  }

  return (
    <div className="container">
      <div className="heading">
          <h3 className="heading-title">Lorem ipsum dolor sit.</h3>
          <p className="heading__content">Iure ab, accusantium corrupti quos aspernatur qui.</p>
      </div>
      <section className="movieCards">
      { nowPlaying.map(movie => <CardItem key={movie.id} movie={movie}  /> ) }
      </section>
    </div>
  )
}

export default Cards;
