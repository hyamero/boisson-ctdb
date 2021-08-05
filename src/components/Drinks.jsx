/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

import HashLoader from "react-spinners/HashLoader";
import Drink from "./Drink";

const Drinks = ({ drinks, setDrinks }) => {
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

  useEffect(() => {
    const getDrinks = async () => {
      setLoading(true);
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

      <div
        className="drink-container container"
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.3rem;
        `}
      >
        {/* Main Content */}
        {!loading && showContent ? (
          <>
            {drinks.map((drink) => (
              <div key={drink.idDrink}>
                <Drink drink={drink} />
                <Link
                  to={`/drinkdetails/${drink.idDrink}`}
                  onClick={() => setShowContent(false)}
                >
                  Details
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
