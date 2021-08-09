/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

import HashLoader from "react-spinners/HashLoader";

const DrinkDetails = ({ match }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  useEffect(() => {
    const getDrinkById = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}${match.params.id}`);
        setDrinkDetail(res.data.drinks[0]);
        setLoading(false);
        console.log(res.data);
      } catch (err) {
        setLoading(false);
        setErr("404 PAGE NOT FOUND");
        console.error(`DRINK NOT FOUND ${err}`);
      }
    };

    getDrinkById();
  }, []);

  return (
    <div
      css={css`
        height: 60vh;

        .drink-details {
          font-size: 5rem;
          text-align: center;
          color: #fff;
          font-family: "Poppins", sans-serif;
        }

        .detail-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 2fr;
          place-items: center;

          .detail-text-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-row: 1;
            grid-column: 1;
            z-index: 3;
          }

          img {
            grid-row: 1;
            grid-column: 1;
            opacity: 0.4;
          }
        }

        h2 {
          font-size: 5rem;
          font-weight: 600;
          /* position: relative;
          right: 7rem; */
          bottom: 3rem;
        }

        h3 {
          font-size: 5rem;
          font-weight: 200;
        }

        h4 {
          font-weight: 300;
          font-size: 1rem;
          position: relative;
          top: 0.5rem;
          left: 0.5rem;
          display: flex;
          justify-content: flex-start;
          font-style: italic;
          color: #f8a024;
        }

        h5 {
          font-size: 1.9rem;
          position: relative;
          bottom: 0.6rem;
          right: 0.5rem;
          font-weight: 500;
          display: flex;
          justify-content: flex-end;
        }

        .back-btn {
          display: flex;
          justify-content: center;
          font-size: 3rem;
          position: absolute;
          bottom: 30px;
        }

        .dbl-text {
          display: flex;
        }

        img {
          height: 450px;
          border-radius: 30px;
        }
      `}
    >
      {loading && (
        <div className="Loader">
          <HashLoader color="#59DEC4" loading={loading} size={60} />
        </div>
      )}

      {!loading && (
        <div className="drink-details">
          <div className="detail-wrapper">
            <img
              src={`${drinkDetail.strDrinkThumb}`}
              alt={`${drinkDetail.strDrink}`}
            />
            <div className="detail-text-wrapper">
              <h4>{drinkDetail.strCategory}</h4>
              <div className="dbl-text">
                <h2>{drinkDetail.strDrink}</h2>
                <h3>{drinkDetail.strIngredient1}</h3>
              </div>
              <h5>{drinkDetail.strGlass}</h5>
            </div>
          </div>
        </div>
      )}

      {!loading && drinkDetail.idDrink !== match.params.id ? (
        <div className="drink-details">{err}</div>
      ) : null}

      {/*Add delay animation using framer motion */}
      <div className="back-btn">
        <Link
          to="/"
          onClick={() => {
            setDrinkDetail([]);
            setErr("");
          }}
        >
          <p className="home-btn">Home</p>
        </Link>
      </div>
    </div>
  );
};

export default DrinkDetails;
