/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      } catch (err) {
        setLoading(false);
        setErr("404 PAGE NOT FOUND");
        console.error(`DRINK NOT FOUND ${err}`);
      }
    };

    getDrinkById();
  }, []);

  //Framer motion variants
  const itemY = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const btn = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      css={css`
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

        ${mq[1]} {
          img {
            height: 350px;
          }

          .home-btn {
            left: 160px;
          }

          h6 {
            left: 170px;
          }

          h2,
          h3 {
            font-size: 3rem;
          }

          h5 {
            font-size: 1.3rem;
            margin-top: 4px;
          }
        }

        ${mq[0]} {
          img {
            height: 300px;
          }

          .home-btn {
            left: 140px;
          }

          h6 {
            left: 150px;
          }

          h2,
          h3 {
            font-size: 2.8rem;
          }

          h4 {
            font-size: 1.4rem;
          }

          h5 {
            font-size: 1rem;
            margin-top: 4px;
          }
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
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              src={`${drinkDetail.strDrinkThumb}`}
              alt={`${drinkDetail.strDrink}`}
            />
            <div className="detail-text-wrapper">
              <motion.h4
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {drinkDetail.strCategory}
              </motion.h4>
              <div className="dbl-text">
                <motion.h2
                  variants={itemY}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {drinkDetail.strDrink !== undefined &&
                  drinkDetail.strDrink.includes(" ")
                    ? drinkDetail.strDrink.split(" ").slice(0, -1).join(" ")
                    : drinkDetail.strDrink}
                </motion.h2>
                <motion.h3
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {drinkDetail.strIngredient1 !== undefined &&
                  drinkDetail.strIngredient1.includes(" ")
                    ? drinkDetail.strIngredient1
                        .split(" ")
                        .slice(0, -1)
                        .join(" ")
                    : drinkDetail.strIngredient1}
                </motion.h3>
              </div>
              <motion.h5
                variants={itemY}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1 }}
              >
                {drinkDetail.strGlass}
              </motion.h5>
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
          <motion.button
            className="home-btn"
            variants={btn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 2.2 }}
          >
            <Link
              to="/"
              onClick={() => {
                setDrinkDetail([]);
                setErr("");
              }}
            >
              <TiArrowBack className="home-btn-text" />
            </Link>
          </motion.button>
          <motion.h6
            variants={btn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            Home
          </motion.h6>
        </>
      )}
    </div>
  );
};

export default DrinkDetails;
