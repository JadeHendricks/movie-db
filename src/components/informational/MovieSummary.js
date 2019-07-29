import React, { Fragment, useState, useEffect, useContext } from 'react';
import Header from "../layouts/Header";
import ActorSlider from "../slider/ActorSlider";
import Cards from "../cards/Cards";
import Loader from "../layouts/Loader";
import { Link } from "react-router-dom";

import MoviesummaryContext from "../../context/moviesummary/moviesummaryContext";


const MovieSummary = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const moviesummaryContext = useContext(MoviesummaryContext);

  const { 
    fetchMovie, 
    fetchMovieReviews, 
    fetchCast, 
    fetchVideos, 
    fetchSimilarMovies, 
    videos, 
    movie, 
    cast, 
    reviews, 
    similarMovies } = moviesummaryContext;

  useEffect(() => {
    fetchMovie(match.params.id);
    fetchMovieReviews(match.params.id);
    fetchCast(match.params.id);
    fetchVideos(match.params.id);
    fetchSimilarMovies(match.params.id);

    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 500); 
  // eslint-disable-next-line
  }, [match.params.id])

  const trimLength = (paragraph, length) => {
    return paragraph.slice(0, length);
  }
  

  if (loading) {
    return <Loader />
  } else {
    return (
      <Fragment>
        <Header movie={movie} />
        <ActorSlider cast={cast} />

        { videos.length > 0 ?
          <div className="container">
            <div className="heading">
              <h4 className="heading__title">Trailers</h4>
            </div>
            <div className="trailers">
              {videos.map(video => (
                <iframe class="trailers__iframe" key={video.id} title={video.id} frameBorder="0" width="100%" height="230"src={`https://www.youtube.com/embed/${video.key}`}></iframe>
              ))}
            </div>
          </div> : null
         }

        { movie ? 
        <section className="movieDetails">
          <div className="container">
            <div className="heading">
              <h4 className="heading__title marginBottom10">Summary</h4>
              <p className="heading__content">{ movie.overview }</p>
            </div>
          </div>
        </section> : null
        }
        
        {
          reviews.length > 0 ?
          <div className="container">
          <div className="heading">
            <h4 className="heading__title">Reviews</h4>
          </div>
          {reviews.map(review => (
            <section key={review.id} className="movieReviews">
              <h4 className="movieReviews__h4">{ review.author }</h4>
              <p className="movieReviews__p">{ trimLength(review.content, 500) }...</p>
              <Link className="movieReviews__link" href={ review.url }>See full review <span>&rarr;</span></Link>
            </section>
          ))} 
        </div> :null
        }

        <div className="container">
          <div className="heading">
            <h4 className="heading__title">Similar Movies</h4>
          </div>
          <Cards movies={similarMovies} />
        </div>
  
      </Fragment>
    )
  }

}

export default MovieSummary;
