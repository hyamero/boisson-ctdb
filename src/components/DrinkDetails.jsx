/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DrinkDetails = ({ match }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);

  useEffect(() => {
    getDrinkById();
    console.log(match);
  }, []);

  const getDrinkById = async () => {
    try {
      const res = await axios.get(
        ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
      );
      setDrinkDetail(res.data.drinks[0]);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(drinkDetail);

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
      <div className="drink-details">
        <p>{drinkDetail.strDrink}</p>
        {drinkDetail.idDrink !== match.params.id && <h2>404 PAGE NOT FOUND</h2>}
      </div>
      <Link to="/">
        <button className="back-btn">back to home</button>
      </Link>
    </div>
  );
};

export default DrinkDetails;
