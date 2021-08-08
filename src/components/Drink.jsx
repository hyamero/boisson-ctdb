/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Drink = ({ drink }) => {
  return (
    <div
      className="Drink"
      css={css`
        font-family: "Playfair Display", serif;
        .drink-category,
        .drink-glass {
          font-size: 0.8rem;
          color: #fff;
          font-weight: 300;
          font-family: "Poppins", sans-serif;
        }

        .tc {
          display: flex;
          position: relative;
          bottom: 17px;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .drink-title {
          font-size: 2.1rem;
          color: #fff;
          font-style: italic;
        }

        .drink-category {
          color: #e40dae;
          position: relative;
          top: 10px;
          margin-left: 4px;
        }

        .drink-glass {
          color: #af05ff;
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
        <div className="tc">
          <h3 className="drink-title">{drink.strDrink}</h3>
          <h4 className="drink-category">{drink.strCategory}</h4>
        </div>
        <h5 className="drink-glass">{drink.strGlass}</h5>
      </div>
    </div>
  );
};

export default Drink;
