import React from 'react';
import CardItem from "./CardItem";

const Cards = ({ movies }) => {
  return (
    <section className="movieCards">
      { movies.map(movie => <CardItem key={movie.id} movie={movie}  /> ) }
    </section>
  )
}

export default Cards;
