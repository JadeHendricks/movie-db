import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import notFoundImage from "../../images/no_image_found.png";
import Loader from "../layouts/Loader";

const ActorSummary = ({ match }) => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const [loading, setLoading] = useState(true);
  const [personData, setPersonData] = useState({});
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    fetchPerson();
    fetchMovieCredits();

    setTimeout(() => {
      setLoading(false);
    }, 500);  
    
    console.log(movieCredits);

  }, []);

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

  if (loading) {
    return <Loader />
  } else {
    return (
      <Fragment>

        { personData ? 
          <section className="movieDetails">
              <div className="container">
                <div className="heading">
                  <h3 className="heading-title">Biography</h3>
                  <p className="heading__content">{ personData.biography }</p>
                </div>
              </div>
          </section> : null
        }

        { movieCredits.length > 0 ? 
          <section className="actorRoles">
            <div className="container">
              <h3 className="actorRoles__title marginBottom30">Popular Roles</h3>
              {movieCredits.map(roles => (
                <div key={ roles.id } className="roles">
                  <div className="roles__top">
                    <Link to={`/movie-summary/${roles.id}`} className="roles__link">
                      {roles.backdrop_path === null ? 
                        <img src={notFoundImage} className="roles__image" alt={ roles.title } title={ roles.title }></img>: 
                        <img src={`https://image.tmdb.org/t/p/w185/${roles.poster_path}`} className="roles__image" alt={ roles.title } title={ roles.title } />
                      }
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
          </section> : null
        }

      </Fragment>
    )
  }
}

export default ActorSummary;
