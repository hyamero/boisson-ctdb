/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

const Navbar = ({ setDrinks, setSearchValue }) => {
  return (
    <nav
      className="Navbar container"
      css={css`
        width: 100%;
        height: 6rem;
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
      `}
    >
      <Link to="/" onClick={() => setSearchValue("")}>
        boisson <b>development stage</b>
      </Link>
      <Link to="/about" onClick={() => setSearchValue("")}>
        drink with us
      </Link>
    </nav>
  );
};

export default Navbar;
