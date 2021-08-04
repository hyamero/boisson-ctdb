/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Drink from "./Drink";

const Drinks = ({ drinks, setDrinks }) => {
  useEffect(() => {
    getDrinks();
  }, []);

  const getDrinks = async () => {
    try {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
      );
      setDrinks(res.data.drinks);
      console.log(res.data.drinks);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="drink-container container"
      css={css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.3rem;
      `}
    >
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <Drink drink={drink} />
          <Link to={`/drinkdetails/${drink.idDrink}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
