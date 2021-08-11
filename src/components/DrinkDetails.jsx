/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Loader from "./Loader";
import { TiArrowBack } from "react-icons/ti";

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
          color: #f9efe0;
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
          font-size: 1.7rem;
          position: relative;
          top: 0.5rem;
          left: 0.5rem;
          display: flex;
          justify-content: flex-start;
          color: #f8a024;
          font-family: "Nanum Brush Script", cursive;
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

        .dbl-text {
          display: flex;
        }

        img {
          height: 450px;
          border-radius: 30px;
          -webkit-user-drag: none;
        }

        .home-btn {
          outline: none;
          border: none;
          margin: auto;
          background: #161616;
          padding: 5px 10px;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          position: relative;
          left: 215px;
          bottom: 2.8rem;
          opacity: 0.8;
          transition: 0.2s linear;

          &:hover {
            bottom: 3.2rem;
          }
        }

        .home-btn-text {
          color: #fff;
          font-family: "Poppins", sans-serif;
          font-weight: 200;
          font-size: 2.3rem;
          letter-spacing: 5px;
        }

        h6 {
          font-family: "Nanum Brush Script", cursive;
          color: #ce933d;
          font-size: 1.7rem;
          position: relative;
          left: 227px;
          bottom: 3.4rem;
          display: flex;
          justify-content: center;
          margin: auto;
          width: 20%;
          transform: rotate(-15deg);
        }
      `}
    >
      {loading && (
        <div className="Loader">
          <Loader />
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
        <div className="err404">{err}</div>
      ) : null}

      {/*Add delay animation using framer motion */}
      {!loading && (
        <>
          <button className="home-btn">
            <Link
              to="/"
              onClick={() => {
                setDrinkDetail([]);
                setErr("");
              }}
            >
              <TiArrowBack className="home-btn-text" />
            </Link>
          </button>
          <h6>Home</h6>
        </>
      )}
    </div>
  );
};

export default DrinkDetails;
