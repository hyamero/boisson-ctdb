/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DrinkDetails = ({ drinks, match }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);

  useEffect(() => {
    getDrinkById();
    console.log(match);
  }, []);

  const getDrinkById = async () => {
    try {
      const res = await axios.get(
        ` www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match}`
      );
      setDrinkDetail(res);
      console.log(match);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      css={css`
        .drink-details {
          font-size: 5rem;
          text-align: center;
        }

        p {
          font-size: 2rem;
        }

        .back-btn {
          margin: auto;
          display: block;
          font-size: 3rem;
        }
      `}
    >
      <p>lol</p>
      {drinks.map((drink) => (
        <div className="drink-details" key={drink.idDrink}>
          {drink.strDrink}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            fugiat expedita fugit nulla sapiente incidunt unde laboriosam iste
            maxime dolorem.
          </p>
        </div>
      ))}
      <Link to="/">
        <button className="back-btn">back to home</button>
      </Link>
    </div>
  );
};

export default DrinkDetails;
