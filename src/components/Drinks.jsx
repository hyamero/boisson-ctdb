/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

import Drink from "./Drink";
import Loader from "./Loader";

const Drinks = ({
  drinks,
  setDrinks,
  showContent,
  setShowContent,
  loading,
  setLoading,
  setCursorVal,
  scrollDown,
}) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=x";

  useEffect(() => {
    setLoading(true);
    const getDrinks = async () => {
      try {
        Aos.init({});
        const res = await axios.get(`${url}`);
        setDrinks(res.data.drinks);
        console.log(res.data.drinks);
        setTimeout(() => {
          setLoading(false);
          setShowContent(true);
        }, 2500);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    };

    getDrinks();
  }, []);

  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="Loader">
          <Loader />
        </div>
      )}

      <div className="drink-container">
        {/* Main Content */}
        {!loading && showContent ? (
          <>
            <h3
              css={css`
                font-family: "Nanum Brush Script", cursive;
                font-size: 1.5rem;
                position: absolute;
                top: 8rem;
                left: -0.7rem;
                color: #fcb043;
                z-index: 99;
                transform: rotate(-90deg);
                opacity: 0.9;
                letter-spacing: 2px;
                white-space: nowrap;

                ${mq[5]} {
                  transform: rotate(0deg);
                  top: -1rem;
                  left: 10rem;
                }
              `}
            >
              click img for more details.
            </h3>
            {drinks.map((drink) => (
              <div
                data-aos="fade-up"
                key={drink.idDrink}
                onMouseEnter={() => setCursorVal(8)}
                onMouseLeave={() => setCursorVal(30)}
                onClick={() => setCursorVal(30)}
              >
                <Link
                  to={`/drink-details/${drink.idDrink}`}
                  onClick={() => setShowContent(false)}
                >
                  <Drink drink={drink} scrollDown={scrollDown} />
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
