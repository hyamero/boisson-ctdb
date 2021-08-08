/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Drink = ({ drink }) => {
  return (
    <div
      className="Drink"
      css={css`
        font-family: "Playfair Display", serif;
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
          font-style: italic;
          position: relative;
          bottom: 17px;
          text-align: center;
          text-shadow: 2px 2px #000;
        }

        .drink-category {
          color: #af05ff;
          position: relative;
          bottom: 17px;
          text-align: center;
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
          opacity: 0.5;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);

          &:hover {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}
    >
      <div className="drink-wrapper">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div className="drink-text">
        <h3 className="drink-title">{drink.strDrink}</h3>
        <h4 className="drink-category">{drink.strCategory}</h4>
      </div>
    </div>
  );
};

export default Drink;
