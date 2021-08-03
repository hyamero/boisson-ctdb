/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

const Drinks = ({ drinks }) => {
  return (
    <div
      className="drink-container container"
      css={css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.3rem;
      `}
    >
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

export default Drinks;
