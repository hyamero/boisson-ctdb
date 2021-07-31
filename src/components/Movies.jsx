/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";
import Movie from "./Movie";

const Movies = ({ movies, setMovies }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      `}
    >
      {/* {movies.forEach((movie) => {
        let rankUpDown = movie.rankUpDown;
        rankUpDown = rankUpDown.replace("+", { RiArrowUpCircleFill });
        console.log(rankUpDown);
      })} */}
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
