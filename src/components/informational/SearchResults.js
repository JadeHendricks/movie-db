import React, { useEffect, useState } from 'react';
import svg from "../../images/sprite.svg";
import { Link } from "react-router-dom"; 

const SearchResults = () => {

  const query = decodeURI(window.location.href.split("/").pop());

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, [query])

  const fetchSearch = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    const data = await response.json();
    setResults(data.results);
  }

  return (
    <section className="searchResults">
      <div className="container container--small">
        <h2 className="searchResults__title">Search results for query</h2>
        <div className="searchResults__wrapper">
          {results.map(movie => (
            <div key={ movie.id } className="searchCard">
              <Link to={`/movie-summary/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="searchCard__image" alt={ movie.title } title={ movie.title }></img>
                <div className="searchCard__content">
                  <h5 className="searchCard__title">{ movie.title }</h5>
                  <p className="searchCard__desc">{ movie.vote_average }</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="pagination">
            <div className="pagination__prev">
              <button className="button button--white">
                <svg className="pagination__icon"><use xlinkHref={`${svg}#icon-chevron-thin-left`}></use></svg>
                Previous
              </button>
            </div>
            <div className="pagination__next">
              <button className="button button--white">
                <svg className="pagination__icon"><use xlinkHref={`${svg}#icon-chevron-thin-right`}></use></svg>
                Next
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SearchResults;
