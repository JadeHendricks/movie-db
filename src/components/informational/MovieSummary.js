import React, { Fragment, useState, useEffect } from 'react';
import Header from "../layouts/Header";
import ActorSlider from "../slider/ActorSlider";
import Cards from "../cards/Cards";

const MovieSummary = ({ match }) => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

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
  }, [])

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
    setCast(data.cast.slice(0, 10))
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
  
  return (
    <Fragment>
      <Header movie={movie} />
      <ActorSlider cast={cast} />
      <div class="container">
        <div className="heading">
          <h3 className="heading-title">Trailers</h3>
        </div>
        <div className="trailers">
          {videos.map(video => (
            <iframe class="trailers__iframe" key={video.id} title={video.id} frameBorder="0" width="100%" height="230"src={`https://www.youtube.com/embed/${video.key}`}></iframe>
          ))}
        </div>
      </div>

      <section className="movieDetails">
        <div className="container">
          <div className="heading">
            <h3 className="heading-title marginBottom10">Summary</h3>
            <p class="heading__content">{ movie.overview }</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="heading">
          <h3 className="heading-title">Reviews</h3>
        </div>
        {reviews.map(review => (
          <section key={review.id} className="movieReviews">
            <h4 class="movieReviews__h4">{ review.author }</h4>
            <p class="movieReviews__p">{ trimLength(review.content, 500) }...</p>
            <a class="movieReviews__link" href={ review.url }>See full review <span>&rarr;</span></a>
          </section>
        ))}
      </div>
      <Cards movies={similarMovies} />

    </Fragment>
  )
}

export default MovieSummary;
