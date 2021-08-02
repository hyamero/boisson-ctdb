/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";

import Drinks from "./components/Drinks";

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
      <Drinks drinks={drinks} />
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
    </div>
  );
}

export default App;
