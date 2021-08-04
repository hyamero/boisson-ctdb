/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Drinks from "./components/Drinks";
import About from "./components/About";
import DrinkDetails from "./components/DrinkDetails";

function App() {
  const [drinks, setDrinks] = useState([]);

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
        <Switch>
          <Route path="/" exact>
            <Drinks drinks={drinks} setDrinks={setDrinks} />
          </Route>
          <Route path="/about" exact component={About} />
          <Route path="/drinkdetails/:id" exact component={DrinkDetails} />
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

            .Loader {
              text-align: center;
              height: 50vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        />
      </div>
    </Router>
  );
}

export default App;
