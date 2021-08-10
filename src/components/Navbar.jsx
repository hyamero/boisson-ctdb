/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = ({ searchValue, setSearchValue, setSearchData, setLoading }) => {
  return (
    <nav
      className="Navbar container"
      css={css`
        font-family: "Playfair Display", serif;
        width: 85%;
        height: 6rem;
        padding: 2rem 0;
        margin-bottom: 110px;
        display: flex;
        justify-content: space-between;
        border-bottom: #fff 1px solid;
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
