/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { RiSearchEyeLine } from "react-icons/ri";

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
        position: relative;
        bottom: 90px;

        input {
          width: 25rem;
          height: 2.3rem;
          background: #1b1b1b;
          border: none;
          color: #fff;
          padding: 0 40px;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          border-radius: 30px;
        }

        .icon-nav {
          color: #757575;
          font-size: 1.5rem;
          position: relative;
          top: 6px;
          left: 34px;
        }

        .bar-container {
          display: flex;
        }
      `}
    >
      <div className="bar-container">
        <RiSearchEyeLine className="icon-nav" />
        <input
          type="text"
          placeholder="Search More Drinks"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            getSearchData(e.target.value);
            history.push("/");
            console.log(searchValue);
          }}
          onSubmit={(e) => e.preventDefault()}
        />
      </div>
    </form>
  );
};

export default SearchForm;
