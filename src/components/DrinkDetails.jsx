/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import React from "react";

const DrinkDetails = ({ match }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#59DEC4");

  useEffect(() => {
    getDrinkById();
    setLoading(true);
    console.log(match);
  }, []);

  const getDrinkById = () => {
    setTimeout(async () => {
      try {
        const res = await axios.get(
          ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        setDrinkDetail(res.data.drinks[0]);
        setLoading(false);
        console.log(res);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    }, 2000);
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
      {loading && (
        <div className="Loader">
          <HashLoader color={color} loading={loading} size={60} />
        </div>
      )}

      {loading === false && drinkDetail.idDrink !== match.params.id ? (
        <div className="drink-details">404 PAGE NOT FOUND</div>
      ) : null}

      {!loading && (
        <>
          <div className="drink-details">
            <p>{drinkDetail.strDrink}</p>
          </div>
          <Link to="/">
            <button className="back-btn">back to home</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default DrinkDetails;
