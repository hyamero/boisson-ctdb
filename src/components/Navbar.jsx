/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = ({ searchValue, setSearchValue, setSearchData, setLoading }) => {
  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <nav
      className="Navbar container"
      css={css`
        font-family: "Playfair Display", serif;
        width: 85%;
        height: 6rem;
        padding: 2rem 0;
        margin-bottom: 80px;
        display: flex;
        justify-content: space-between;
        border-bottom: #efe1ce 1px solid;
        background: #0f0f0f;

        h3 {
          font-size: 2rem;
          color: #fff;
          font-style: italic;
          position: relative;
          top: 20px;
          left: 5px;
          background: -webkit-linear-gradient(#ffbd5c, #f8a024);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: 999;
        }

        ${mq[1]} {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 8rem;

          h3 {
            margin: 10px 0;
            top: 25px;
          }
        }
      `}
    >
      <Link to="/" onClick={() => setSearchValue("")}>
        <h3>boisson</h3>
      </Link>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchData={setSearchData}
        setLoading={setLoading}
      />
    </nav>
  );
};

export default Navbar;
