/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Drink = ({ drink }) => {
  return (
    <div
      className="Drink"
      css={css`
        font-family: "Poppins", sans-serif;

        .drink-category,
        .drink-glass {
          font-size: 0.8rem;
          color: #111;
          font-weight: 300;
        }

        .drink-title {
          font-size: 1.1rem;
          color: #111;
        }

        img {
          height: 450px;
        }
      `}
    >
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div className="drink-text">
        <h3 className="drink-title">{drink.strDrink}</h3>
        <h4 className="drink-category">{drink.strCategory}</h4>
        <h5 className="drink-glass">{drink.strGlass}</h5>
      </div>
    </div>
  );
};

export default Drink;
