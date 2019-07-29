import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom"; 
import Pagination from "./Pagination";
import Loader from "../layouts/Loader";
import notFoundImage from "../../images/no_image_found.png";

import SearchContext from "../../context/search/searchContext";

const SearchResults = () => {

  const searchContext = useContext(SearchContext);

  const { 
    results, 
    totalResults, 
    currentPage, 
    fetchSearch, 
    nextPage } = searchContext;

  const query = decodeURI(window.location.href.split("/").pop());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSearch(query);
    
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  // eslint-disable-next-line
  }, [query])

  const numberOfPages = Math.floor(totalResults / 20);

  if (loading) {
    return  <Loader />
  } else {
    return (
      <section className="searchResults">
        <div className="container container--small">
          <h2 className="searchResults__title">{`Search results for ${query}`}</h2>
          <div className="searchResults__wrapper">
            {results.map(movie => (
              <div key={ movie.id } className="searchCard">
                <Link to={`/movie-summary/${movie.id}`}>
                  {movie.poster_path === null ? 
                    <img src={notFoundImage} className="searchCard__image" alt={ movie.title } title={ movie.title }></img> :
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="searchCard__image" alt={ movie.title } title={ movie.title }></img>
                  }
                  <div className="searchCard__content">
                    <h5 className="searchCard__title">{ movie.title }</h5>
                    <p className="searchCard__desc">{ movie.vote_average }</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          { totalResults > 20 ? <Pagination pages={numberOfPages} query={query} nextPage={nextPage} currentPage={currentPage} /> : ""}    
        </div>
      </section>
    )
  }
}

export default SearchResults;
