/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Drink from "./Drink";
import Loader from "./Loader";

const SearchPage = ({ drinks, showContent, loading, setShowContent }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      className="SearchPage"
      css={css`
        .nullData {
          font-size: 3rem;
          color: #fff;
          font-family: "Poppins", sans-serif;
          font-size: 10rem;
          font-weight: 800;
        }

        h2 {
          font-size: 5rem;
          font-family: "Nanum Brush Script", cursive;
          color: #faa936;
          position: relative;
          left: 10rem;
        }
      `}
    >
      {/* Loader */}
      {loading && (
        <div className="Loader">
          <Loader />
        </div>
      )}
      {drinks === null && !loading ? (
        <>
          <h2>uh ohh....</h2>
          <div className="nullData">no drinks matched</div>
        </>
      ) : null}
      {showContent && drinks !== null && !loading ? (
        <div className="drink-container container">
          {drinks.map((drink) => (
            <div data-aos="fade-up" key={drink.idDrink}>
              {showContent ? (
                <>
                  <Link
                    to={`/drink-details/${drink.idDrink}`}
                    onClick={() => setShowContent(false)}
                  >
                    <Drink drink={drink} />
                  </Link>
                </>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchPage;
