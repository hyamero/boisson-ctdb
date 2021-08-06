/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Drink from "./Drink";
import React from "react";

const SearchPage = ({ drinks, showContent, notExist }) => {
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
      {drinks === null && <div className="nullData">lol it not der</div>}
      {notExist && <div>lol it doesn't exist</div>}
      {showContent && drinks !== null ? (
        <div className="drink-container container">
          {drinks.map((drink) => (
            <div key={drink.idDrink}>
              {showContent ? (
                <>
                  <Drink drink={drink} />
                  <Link
                    to={`/drinkdetails/${drink.idDrink}`}
                    onClick={() => setShowContent(false)}
                  >
                    Details
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
