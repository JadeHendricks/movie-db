import React, { Fragment, useState, useEffect } from 'react';
import Header from "../layouts/Header";
import ActorSlider from "../slider/ActorSlider";

const MovieSummary = ({ match }) => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovie();
    fetchMovieReviews();
    fetchCast();
  }, [])

  const fetchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setMovie(data);
  }

  const fetchMovieReviews = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setReviews(data.results);
  }

  const fetchCast = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setCast(data.cast.slice(0, 10))
  }

  const trimLength = (paragraph, length) => {
    return paragraph.slice(0, length);
  }
  
  return (
    <Fragment>
      <Header movie={movie}/>
      <ActorSlider cast={cast} />

      <section className="movieDetails">
        <div className="container">
          <div className="informationBlock box">
            <h4 className="informationBlock__title">Summary</h4>
            <p className="informationBlock__desc">
              { movie.overview }
            </p>
          </div>
        </div>
      </section>

      {reviews.map(review => (
        <section key={review.id} className="movieDetails">
          <div className="container">
            <div className="informationBlock box">
              <h4 className="informationBlock__title">{ review.author }</h4>
              <p className="informationBlock__desc">
                { trimLength(review.content, 500) }...
              </p>
              <a href={ review.url }>See full review</a>
            </div>
          </div>
        </section>
      ))}

    </Fragment>
  )
}

export default MovieSummary;
