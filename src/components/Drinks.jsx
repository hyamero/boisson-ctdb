/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import React from "react";

import Drink from "./Drink";

const Drinks = ({ drinks, setDrinks }) => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");

  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
        );
        setDrinks(res.data.drinks);
        setLoading(false);
        console.log(res.data.drinks);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    }, 2000);
  };

  return (
    <>
      {loading && (
        <div className="Loader">
          <HashLoader color={color} loading={loading} size={60} />
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
        {!loading && (
          <>
            {drinks.map((drink) => (
              <div key={drink.idDrink}>
                <Drink drink={drink} />
                <Link to={`/drinkdetails/${drink.idDrink}`}>Details</Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Drinks;
