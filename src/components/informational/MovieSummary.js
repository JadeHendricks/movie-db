import React, { Fragment, useState, useEffect } from 'react';
import Header from "../layouts/Header";
import ActorSlider from "../slider/ActorSlider";

const MovieSummary = ({ match }) => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, [])

  const getMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setMovie(data);
  }

  return (
    <Fragment>
      <Header />
      <ActorSlider />
      <section className="movieDetails">
        <div className="container">
          <div className="informationBlock box">
            <h4 className="informationBlock__title">Summary</h4>
            <p className="informationBlock__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos
              ex officiis id velit officia? Temporibus laudantium nesciunt, quae
              adipisci ad numquam optio ab asperiores delectus repudiandae nostrum
              odio. Ducimus, officia! Sit ipsum facilis veniam ipsa eaque qui
              fugit, non rem corrupti debitis et facere est explicabo quam error
              animi odio sapiente ducimus fugiat similique voluptas minus
              pariatur? Voluptatum, nostrum voluptatem corporis veritatis debitis
              id dolorum quibusdam fugit labore laboriosam quidem accusantium
              itaque aut consectetur? At ut enim quaerat illum ipsum eos eum quia
              repudiandae tempora maxime dicta error iure quidem omnis temporibus
              magni delectus illo odit aut, recusandae vero!
            </p>
          </div>
        </div>
      </section>
      <section className="movieDetails">
        <div className="container">
          <div className="informationBlock box">
            <h4 className="informationBlock__title">Popular Review</h4>
            <p className="informationBlock__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos
              ex officiis id velit officia? Temporibus laudantium nesciunt, quae
              adipisci ad numquam optio ab asperiores delectus repudiandae nostrum
              odio. Ducimus, officia! Sit ipsum facilis veniam ipsa eaque qui
              fugit, non rem corrupti debitis et facere est explicabo quam error
              animi odio sapiente ducimus fugiat similique voluptas minus
              pariatur? Voluptatum, nostrum voluptatem corporis veritatis debitis
              id dolorum quibusdam fugit labore laboriosam quidem accusantium
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default MovieSummary;
