/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Maid from "css-maid";
import { RiArrowDownSLine } from "react-icons/ri";
import AnimatedCursor from "react-animated-cursor";
import cursor from "./img/cursor.png";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Drinks from "./components/Drinks";
import DrinkDetails from "./components/DrinkDetails";
import SearchPage from "./components/SearchPage";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [cursorVal, setCursorVal] = useState(30);
  //Show doesn't exist message on search
  const [scrollDown, setScrollDown] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const drinkEndRef = useRef(null);
  const scrollToBottom = () => {
    drinkEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollDown || !scrollDown) scrollToBottom();
  }, [scrollDown]);

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100%;
          background: #0f0f0f;
          padding-bottom: 100px;
          position: relative;

          .icon-down {
            color: #fff;
            font-size: 3rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 41rem auto 0 auto;
            width: 100px;
            transition: 0.3s linear;

            &:hover {
              margin: 41.4rem auto 0 auto;
            }

            .hidden {
              opacity: 0;
            }
          }

          .scrollDiv {
            position: absolute;
            top: 85vh;
            height: 3vh;
          }
        `}
      >
        <AnimatedCursor
          innerSize={8}
          outerSize={cursorVal}
          color="255,255,255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.7}
        />
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
                setCursorVal={setCursorVal}
                cursorVal={cursorVal}
                scrollDown={scrollDown}
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
            <a
              onClick={() => {
                setScrollDown(!scrollDown), console.log(scrollDown);
              }}
            >
              <RiArrowDownSLine className={scroll ? "hidden" : "icon-down"} />
            </a>
            <div className="scrollDiv" ref={drinkEndRef}></div>
          </Route>
          <Route path="/drink-details/:id" exact component={DrinkDetails} />
          <Route
            path="/"
            render={() => <div className="err404">404 page not found</div>}
          />
        </Switch>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

            @import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap");

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Playfair Display", serif;
              user-select: none;
            }

            html {
              background: #0f0f0f;
            }

            ::selection {
              background: #fff;
              color: #1b1b1b;
            }

            ::-webkit-scrollbar {
              width: 4px;
              height: 4px;
              border: 1px solid #d5d5d5;
            }

            ::-webkit-scrollbar-track {
              border-radius: 0;
              background: #eeeeee;
            }

            ::-webkit-scrollbar-thumb {
              border-radius: 0;
              background: #b0b0b0;
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
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1rem;
              width: 85vw;
              height: 100%;
              border-top-left-radius: 60px;
              border-top-right-radius: 60px;
              scroll-snap-type: y mandatory;
              overflow: hidden;
              position: relative;
              bottom: 50px;

              .drink-wrapper {
                position: relative;
                right: 36px;
                height: 450px;
                overflow: hidden;
              }
            }

            .Drink {
              cursor: url(${cursor}), pointer;
            }
          `}
        />
      </div>
      <Maid />
    </Router>
  );
}

export default App;
