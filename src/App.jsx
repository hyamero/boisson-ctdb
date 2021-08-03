/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Drink from "./components/Drink";
import About from "./components/About";
import { render } from "react-dom";

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
    <Router>
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
        <Switch>
          <Route path="/" exact>
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
          </Route>
          <Route path="/about" exact component={About} />
          <Route
            path="/"
            render={() => <div className="err404">404 page not found</div>}
          />
        </Switch>
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

            .err404 {
              text-align: center;
              font-size: 4rem;
            }
          `}
        />
      </div>
    </Router>
  );
}

export default App;
