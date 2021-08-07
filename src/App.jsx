/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
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
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  //Show doesn't exist message on search

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100%;
          background: #f0f0f2;
          padding-bottom: 100px;
        `}
      >
        <Navbar setDrinks={setDrinks} setSearchValue={setSearchValue} />
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchData={setSearchData}
          setLoading={setLoading}
        />
        <Switch>
          <Route path="/" exact>
            {!searchValue && (
              <Drinks
                drinks={drinks}
                setDrinks={setDrinks}
                showContent={showContent}
                setShowContent={setShowContent}
                loading={loading}
                setLoading={setLoading}
              />
            )}
            {searchValue && (
              <SearchPage
                drinks={searchData}
                searchValue={searchValue}
                showContent={setShowContent}
                setShowContent={setShowContent}
                loading={loading}
              />
            )}
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
            @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Playfair Display", serif;
            }

            .container {
              max-width: 90%;
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
              display: flex;
              width: 85vw;
              height: 100%;
              scroll-snap-type: x mandatory;
              overflow-x: scroll;
              overflow-y: hidden;
              border-radius: 60px;
              position: relative;
              bottom: 50px;
            }

            div {
              scroll-snap-align: start;
            }
          `}
        />
      </div>
      <Maid />
    </Router>
  );
}

export default App;
