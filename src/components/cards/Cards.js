import React from 'react';
import CardItem from "./CardItem";

const Cards = ({ movies }) => {
  return (
    <div className="container">
      <div className="heading">
          <h3 className="heading-title">Lorem ipsum dolor sit.</h3>
      </div>
      <section className="movieCards">
      { movies.map(movie => <CardItem key={movie.id} movie={movie}  /> ) }
      </section>
    </div>
  )
}

export default Cards;
