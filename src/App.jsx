/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    try {
      const response = await axios.get("");
      setMovies(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="App"
      css={css`
        height: 100vh;
        background: coral;
      `}
    >
      <p></p>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
    </div>
  );
}

export default App;
