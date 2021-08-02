/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Drink from "./components/Drink";

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
        );
        setDrinks(res.data.drinks);
        console.log(res.data.drinks);
      } catch (err) {
        console.error(err);
      }
    };

    getDrinks();
  }, []);

  console.log(drinks);

  return (
    <div
      className="App"
      css={css`
        height: 100vh;
        background: coral;
      `}
    >
      <Navbar />
      <SearchForm />
      {/* Main Section*/}
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
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .container {
            max-width: 75%;
            margin: 0 auto;
          }
        `}
      />
    </div>
  );
}

export default App;
