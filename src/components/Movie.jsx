/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { render } from "react-dom";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { RiArrowDownCircleFill } from "react-icons/ri";

const Movie = ({ movie }) => {
  return (
    <div
      className="Movie"
      css={css`
        img {
          width: 200px;
        }
      `}
    >
      <h4>{movie.rank}</h4>
      <h3>{movie.title}</h3>
      <h4>
        {movie.rankUpDown.includes("+") ? <RiArrowUpCircleFill /> : "no change"}
        {movie.rankUpDown.includes("-") ? (
          <RiArrowDownCircleFill />
        ) : (
          "no change"
        )}
        {movie.rankUpDown.substring(1)}
      </h4>
      <img src={movie.image} alt={movie.title} />
    </div>
  );
};

export default Movie;
