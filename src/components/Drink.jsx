/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useRef } from "react";
import React from "react";

const Drink = ({ drink, scrollDown }) => {
  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Drink"
      css={css`
        /* font-family: "Playfair Display", serif; */
        font-family: "Poppins", sans-serif;
        margin-bottom: 3rem;

        position: relative;
        .drink-category,
        .drink-glass {
          font-size: 0.8rem;
          color: #fff;
          font-weight: 300;
          font-family: "Poppins", sans-serif;
        }

        .drink-title {
          font-size: 2.1rem;
          color: #f9efe0;
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
          height: 410px;
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
        ${mq[5]} {
          img {
            height: 350px;
          }
        }

        ${mq[4]} {
          margin-bottom: 1rem;

          img {
            height: 320px;
          }
        }

        ${mq[3]} {
          margin-bottom: 0;

          img {
            height: 380px;
          }
        }

        ${mq[2]} {
          img {
            height: 330px;
          }
        }

        ${mq[1]} {
          img {
            height: 380px;
          }
        }

        ${mq[0]} {
          img {
            height: 310px;
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
