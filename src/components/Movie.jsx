import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <p>{movie.title}</p>
      <img src={movie.image} alt={movie.title} />
    </div>
  );
};

export default Movie;
