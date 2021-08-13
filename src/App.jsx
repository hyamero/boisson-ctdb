/**@jsx jsx */
import React from "react";
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";

import AnimatedCursor from "react-animated-cursor";
import cursor from "./img/cursor.png";
import background from "./img/background.svg";
import Maid from "css-maid";

import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchPage";
import Drinks from "./components/Drinks";
import DrinkDetails from "./components/DrinkDetails";
import Footer from "./components/Footer";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [cursorVal, setCursorVal] = useState(30);
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  //Scroll Down
  const drinkEndRef = useRef(null);

  const scrollToBottom = () => {
    drinkEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollDown || !scrollDown) scrollToBottom();
  }, [scrollDown]);

  //Scroll Up
  const drinkStartRef = useRef(null);

  const scrollToTop = () => {
    drinkStartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollUp || !scrollUp) scrollToTop();
  }, [scrollUp]);

  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100%;
          background: url(${background});
          background-size: cover;
          background-attachment: fixed;
          position: relative;

          .icon-down {
            color: #fff;
            font-size: 3rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 41rem auto 0 auto;
            width: 80px;
            transition: 0.3s linear;
            opacity: 0.8;

            &:hover {
              margin: 41.4rem auto 0 auto;
              opacity: 1;
            }
          }

          .icon-up-main {
            color: #fff;
            font-size: 3rem;
            position: fixed;
            top: 85vh;
            right: 0;
            width: 80px;
            transition: 0.3s linear;
            opacity: 0.8;

            &:hover {
              opacity: 1;
              top: 84vh;
            }
          }

          .hidden {
            opacity: 0;
          }

          .scrollDiv {
            position: absolute;
            top: 85vh;
            height: 3vh;
          }

          .scrollDivUp {
            position: absolute;
            top: 0;
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
        <Navbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchData={setSearchData}
          setLoading={setLoading}
        />
        <div className="scrollDivUp" ref={drinkStartRef}></div>
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
            {/*Up and Down icons*/}
            {!loading && (
              <>
                <a
                  onClick={() => {
                    setScrollDown(!scrollDown);
                  }}
                >
                  <RiArrowDownSLine
                    className={scroll ? "hidden" : "icon-down"}
                  />
                </a>
                <a
                  onClick={() => {
                    setScrollUp(!scrollUp);
                  }}
                >
                  <MdKeyboardArrowUp
                    className={scroll ? "icon-up-main" : "hidden"}
                  />
                </a>
              </>
            )}
            <div className="scrollDiv" ref={drinkEndRef}></div>
            {!loading && showContent ? (
              <Footer scrollUp={scrollUp} setScrollUp={setScrollUp} />
            ) : null}
          </Route>
          <Route path="/drink-details/:id" exact component={DrinkDetails} />
          <Route
            path="/"
            render={() => <div className="err404">404 PAGE NOT FOUND</div>}
          />
        </Switch>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

            @import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap");

            @import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap");

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
              background: #0f0f0f;
            }

            ::-webkit-scrollbar-thumb {
              border-radius: 0;
              background: #3b3b3b;
            }

            .container {
              max-width: 1280px;
              margin: 0 auto;
            }

            .err404 {
              text-align: center;
              color: #fff;
              font-family: "Poppins", sans-serif;
              font-size: 10rem;
              font-weight: 800;
              position: absolute;
              top: 38vh;
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
              flex-wrap: wrap;
              justify-content: center;
              position: relative;
              bottom: 50px;
              position: relative;
              padding: 0 100px;
              padding-top: 30px;

              ${mq[4]} {
                padding: 0 90px;
              }

              ${mq[2]} {
                padding: 0 50px;
              }

              ${mq[1]} {
                display: grid;
                grid-template-columns: 1fr;
                place-items: center;
              }

              .drink-wrapper {
                height: 400px;
                overflow: hidden;
                margin: 0 0.5rem;
                border-top-left-radius: 30px;
                border-bottom-right-radius: 30px;

                ${mq[5]} {
                  height: 350px;
                }

                ${mq[4]} {
                  height: 320px;
                }

                ${mq[3]} {
                  height: 380px;
                }

                ${mq[2]} {
                  height: 330px;
                }

                ${mq[1]} {
                  height: 380px;
                }

                ${mq[0]} {
                  height: 340px;
                }
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
