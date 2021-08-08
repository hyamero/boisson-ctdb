/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";

import HashLoader from "react-spinners/HashLoader";
import Drink from "./Drink";

const Drinks = ({
  drinks,
  setDrinks,
  showContent,
  setShowContent,
  loading,
  setLoading,
  setCursorVal,
}) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=x";

  useEffect(() => {
    setLoading(true);
    const getDrinks = async () => {
      try {
        const res = await axios.get(`${url}`);
        setDrinks(res.data.drinks);
        console.log(res.data.drinks);
        setLoading(false);
        setShowContent(true);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    };

    getDrinks();
  }, []);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="Loader">
          <HashLoader color="#fff" loading={loading} size={60} />
        </div>
      )}

      <div className="drink-container container">
        {/* Main Content */}
        {!loading && showContent ? (
          <>
            {drinks.map((drink) => (
              <div
                key={drink.idDrink}
                onMouseEnter={() => setCursorVal(8)}
                onMouseLeave={() => setCursorVal(30)}
              >
                <Link
                  to={`/drinkdetails/${drink.idDrink}`}
                  onClick={() => setShowContent(false)}
                >
                  <Drink drink={drink} />
                </Link>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Drinks;
