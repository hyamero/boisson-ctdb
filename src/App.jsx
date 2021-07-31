/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";

import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {
      const response = await axios.get(
        "https://imdb-api.com/en/API/MostPopularMovies/k_jgzhvt1n"
      );
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

        .Movies {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      `}
    >
      <Movies className="Movies" movies={movies} setMovies={setMovies} />
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
