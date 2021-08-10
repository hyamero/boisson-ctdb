/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import React from "react";

const Drink = ({ drink, scrollDown }) => {
  return (
    <div
      className="Drink"
      css={css`
        /* font-family: "Playfair Display", serif; */
        font-family: "Poppins", sans-serif;

        position: relative;
        .drink-category,
        .drink-glass {
          font-size: 0.8rem;
          color: #fff;
          font-weight: 300;
          font-family: "Poppins", sans-serif;
        }

        .drink-text {
          position: relative;
          right: 36px;
        }

        .drink-title {
          font-size: 2.1rem;
          color: #fff;
          position: relative;
          bottom: 12px;
          text-align: center;
          font-weight: 600;
        }

        .drink-category {
          font-size: 1.5rem;
          color: #ffbd5c;
          position: relative;
          bottom: 18px;
          text-align: center;
          font-family: "Nanum Brush Script", cursive;
        }

        .drink-glass {
          color: #e40dae;
          position: relative;
          bottom: 18px;
          right: 38px;
          text-align: center;
        }

        img {
          height: 450px;
          -webkit-user-drag: none;
          /* opacity: 0.5; */
          filter: brightness(70%);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);

          &:hover {
            /* opacity: 1; */
            filter: brightness(100%);
            transform: scale(1.2);
          }
        }
      `}
    >
      <div className="drink-wrapper">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div className="drink-text">
        <h3 className="drink-title">
          {drink.strDrink.replace("sex", "Win").replace("Sex", "Win")}
        </h3>
        <h4 className="drink-category">{drink.strCategory}</h4>
      </div>
    </div>
  );
};

export default Drink;
