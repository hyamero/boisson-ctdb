/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Drink = ({ drink }) => {
  return (
    <div
      className="Drink"
      css={css`
        width: 256px;
        display: grid;
        place-items: center;

        p {
          font-size: 2rem;
          color: #fff;
        }

        img {
          height: 256px;
        }
      `}
    >
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h3>{drink.strDrink}</h3>
      <h4>{drink.strCategory}</h4>
      <h5>{drink.strGlass}</h5>
    </div>
  );
};

export default Drink;
