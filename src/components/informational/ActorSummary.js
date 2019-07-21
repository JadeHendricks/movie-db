import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ActorSummary = ({ match }) => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const [personData, setPersonData] = useState({});
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    fetchPerson();
    fetchMovieCredits();
  }, [])

  const fetchPerson = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${match.params.id}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    setPersonData(data);
  }

  const fetchMovieCredits = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${match.params.id}/movie_credits?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    setMovieCredits(data.cast.slice(0, 5));
  }

  return (
    <Fragment>
      <section className="movieDetails">
        <div className="container">
          <div className="informationBlock box">
            <h4 className="informationBlock__title">Biography</h4>
            <p className="informationBlock__desc">
              {personData.biography}
            </p>
          </div>
        </div>
      </section>

      <section className="actorRoles">
        <div className="container">
          <h3 className="actorRoles__title marginBottom30">Popular Roles</h3>
          {movieCredits.map(roles => (
            <div key={ roles.id } className="roles">
              <div className="roles__top">
                <Link to={`/movie-summary/${roles.id}`} className="roles__link">
                  <img src={`https://image.tmdb.org/t/p/w185/${roles.backdrop_path}`} alt="alt" title="title" className="roles__image" />
                  <div>
                    <h5 className="roles__title">{ roles.title}</h5>
                    <p className="roles__role">{ roles.character }</p>
                    <p>{roles.release_date}</p>
                  </div>
                </Link>
              </div>
              <p className="roles__desc">
                { roles.overview }
              </p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  )
}

export default ActorSummary;
