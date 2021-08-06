/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import React from "react";
import DrinkDetails from "./DrinkDetails";

const SearchForm = ({ searchValue, setSearchValue, dr }) => {
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
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          dr();
          console.log(searchValue);
        }}
        onSubmit={(e) => e.preventDefault()}
      />
    </form>
  );
};

export default SearchForm;
