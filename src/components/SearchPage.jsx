/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import HashLoader from "react-spinners/HashLoader";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Drink from "./Drink";

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
          display: flex;
          color: red;
          justify-content: center;
        }
      `}
    >
      {/* Loader */}
      {loading && (
        <div className="Loader">
          <HashLoader color="#fff" loading={loading} size={60} />
        </div>
      )}
      {drinks === null && !loading ? (
        <div className="nullData">no drinks matched</div>
      ) : null}
      {showContent && drinks !== null && !loading ? (
        <div className="drink-container container">
          {drinks.map((drink) => (
            <div data-aos="fade-up" key={drink.idDrink}>
              {showContent ? (
                <>
                  <Link
                    to={`/drinkdetails/${drink.idDrink}`}
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
