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

  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="SearchPage"
      css={css`
        .err-404 {
          padding: 0 100px 50px 100px;

          ${mq[2]} {
            padding: 40px;
          }

          .nullData {
            font-size: 3rem;
            color: #fff;
            font-family: "Poppins", sans-serif;
            font-size: 10rem;
            font-weight: 800;

            ${mq[2]} {
              font-size: 8rem;
            }

            ${mq[1]} {
              font-size: 6rem;
            }

            ${mq[0]} {
              font-size: 4rem;
            }
          }

          h2 {
            font-size: 5rem;
            font-family: "Nanum Brush Script", cursive;
            color: #faa936;

            ${mq[2]} {
              font-size: 4rem;
            }

            ${mq[1]} {
              font-size: 3rem;
            }

            ${mq[0]} {
              font-size: 2rem;
            }
          }
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
        <div className="err-404 container">
          <h2>uh ohh....</h2>
          <div className="nullData">no drinks matched</div>
        </div>
      ) : null}
      {showContent && drinks !== null && !loading ? (
        <div className="drink-container">
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
