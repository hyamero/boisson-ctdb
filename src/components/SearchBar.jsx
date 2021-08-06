/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import React from "react";

const SearchForm = ({ searchValue, setSearchValue }) => {
  return (
    <form
      className="search-form"
      css={css`
        width: 100%;
        height: 6rem;

        display: grid;
        place-items: center;

        input {
          width: 30rem;
          height: 2rem;
        }
      `}
    >
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
          console.log(searchValue);
        }}
        onSubmit={(e) => e.preventDefault()}
      />
    </form>
  );
};

export default SearchForm;
