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
        height: 6rem;
        bottom: 0.8rem;
        position: relative;

        input {
          width: 20rem;
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
          flex-direction: column;

          .text-more {
            font-family: "Nanum Brush Script", cursive;
            font-size: 1.7rem;
            color: #fff;
            display: flex;
            justify-content: flex-end;
          }
        }
      `}
    >
      <div className="bar-container">
        <h3 className="text-more">More Drinks!</h3>
        <div>
          <RiSearchEyeLine className="icon-nav" />
          <input
            type="text"
            placeholder="Search More Drinks"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setTimeout(() => {
                getSearchData(e.target.value);
              }, 1000);
              console.log(searchValue);
              history.push("/");
            }}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
