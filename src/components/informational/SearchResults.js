import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; 
import Pagination from "./Pagination";
import Loader from "../layouts/Loader";
import notFoundImage from "../../images/no_image_found.png";

const SearchResults = () => {

  const query = decodeURI(window.location.href.split("/").pop());

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSearch();
    
    setTimeout(() => {
      setLoading(false);
    }, 500); 

  }, [query])

  const fetchSearch = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    const data = await response.json();
    setResults(data.results);
    setTotalResults(data.total_results);
  }

  const nextPage = async (pageNumber) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${pageNumber}&include_adult=false`);
    const data = await response.json();
    setResults(data.results);
    setCurrentPage(pageNumber);
  }

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
          { totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={nextPage} currentPage={currentPage} /> : ""}    
        </div>
      </section>
    )
  }
}

export default SearchResults;
