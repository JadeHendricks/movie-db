import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import notFoundImage from "../../images/no_image_found.png";
import Loader from "../layouts/Loader";

import PeoplesummaryContext from "../../context/peoplesummary/peoplesummaryContext";

const ActorSummary = ({ match }) => {

  const [loading, setLoading] = useState(true);
  const peoplesummaryContext = useContext(PeoplesummaryContext);
  
  const { 
    fetchPerson, 
    fetchMovieCredits, 
    personData, 
    movieCredits } = peoplesummaryContext;

  useEffect(() => {
    fetchPerson(match.params.id);
    fetchMovieCredits(match.params.id);

    setTimeout(() => {
      setLoading(false);
    }, 500);  
  // eslint-disable-next-line
  }, []);



  if (loading) {
    return <Loader />
  } else {
    return (
      <Fragment>

        { personData ? 
          <section className="movieDetails">
              <div className="container">
                <div className="heading">
                  <h4 className="heading__title">Biography</h4>
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
