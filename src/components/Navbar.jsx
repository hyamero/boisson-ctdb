/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

const Navbar = ({ setDrinks }) => {
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
      <Link to="/">boisson</Link>
      <Link to="/about" onClick={() => setDrinks([])}>
        drink with us
      </Link>
    </nav>
  );
};

export default Navbar;
