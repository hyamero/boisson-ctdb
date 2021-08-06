/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Drink from "./Drink";
import React from "react";

const SearchPage = ({ drinks, showContent, notExist }) => {
  return (
    <>
      {notExist && <div>lol it doesn't exist</div>}
      {showContent && (
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
      )}
    </>
  );
};

export default SearchPage;
