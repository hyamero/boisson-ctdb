/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import React from "react";
import axios from "axios";

const SearchForm = ({ searchValue, setSearchValue, setSearchData }) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const getSearchData = async () => {
    try {
      const res = await axios.get(`${url}${searchValue}`);
      setSearchData(res.data.drinks);
      console.log(res.data.drinks);
    } catch (err) {
      console.error(err);
    }
  };

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
          getSearchData(e.target.value);
          console.log(searchValue);
        }}
        onSubmit={(e) => e.preventDefault()}
      />
    </form>
  );
};

export default SearchForm;
