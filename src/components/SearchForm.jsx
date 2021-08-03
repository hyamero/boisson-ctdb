/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";

const SearchForm = () => {
  return (
    <form
      className="search-form"
      css={css`
        width: 100%;
        height: 6rem;

        display: grid;
        place-items: center;

        input {
          width: 30rem;
          height: 2rem;
        }
      `}
    >
      <input type="text" />
    </form>
  );
};

export default SearchForm;
