/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import Drink from "./Drink";
import React from "react";

const SearchPage = ({ drinks, searchValue, showContent }) => {
  return (
    <>
      {showContent && (
        <div className="drink-container container">
          {drinks
            .filter((drink) =>
              drink.strDrink.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((drink) => (
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
