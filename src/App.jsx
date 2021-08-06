/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Maid from "css-maid";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Drinks from "./components/Drinks";
import DrinkDetails from "./components/DrinkDetails";
import About from "./components/About";
import SearchPage from "./components/SearchPage";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showContent, setShowContent] = useState(false);

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100vh;
          background: coral;
        `}
      >
        <Navbar setDrinks={setDrinks} />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Switch>
          <Route path="/" exact>
            {!searchValue && (
              <Drinks
                drinks={drinks}
                setDrinks={setDrinks}
                showContent={showContent}
                setShowContent={setShowContent}
              />
            )}
            <SearchPage
              drinks={drinks}
              searchValue={searchValue}
              showContent={setShowContent}
              setShowContent={setShowContent}
            />
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

            .drink-container {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 2.3rem;
            }
          `}
        />
      </div>
      <Maid />
    </Router>
  );
}

export default App;
