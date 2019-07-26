import React, { Fragment, useState, useEffect } from 'react';
import Header from "../layouts/Header";
import ActorSlider from "../slider/ActorSlider";
import Cards from "../cards/Cards";
import Loader from "../layouts/Loader";
import { Link } from "react-router-dom";


const MovieSummary = ({ match }) => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetchMovie();
    fetchMovieReviews();
    fetchCast();
    fetchVideos();
    fetchSimilarMovies();

    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 500); 
  
  }, [match.params.id])

  const fetchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setMovie(data);
  }

  const fetchMovieReviews = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setReviews(data.results.slice(0, 4));
  }

  const fetchCast = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setCast(data.cast.slice(0, 10));
  }

  const fetchVideos = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setVideos(data.results);
  }

  const fetchSimilarMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setSimilarMovies(data.results.slice(0, 8));
  }

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
