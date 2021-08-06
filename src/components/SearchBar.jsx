/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router";

const SearchForm = ({
  searchValue,
  setSearchValue,
  setSearchData,
  setLoading,
}) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const getSearchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}${searchValue}`);
      setSearchData(res.data.drinks);
      console.log(res.data.drinks);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  let history = useHistory();

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
          history.push("/");
          console.log(searchValue);
        }}
        onSubmit={(e) => e.preventDefault()}
      />
    </form>
  );
};

export default SearchForm;
