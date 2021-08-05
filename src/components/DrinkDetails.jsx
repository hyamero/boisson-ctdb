/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

import HashLoader from "react-spinners/HashLoader";

const DrinkDetails = ({ match }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  useEffect(() => {
    const getDrinkById = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}${match.params.id}`);
        setDrinkDetail(res.data.drinks[0]);
        setLoading(false);
        console.log(res.data);
      } catch (err) {
        setLoading(false);
        setErr("404 PAGE NOT FOUND");
        console.error(`DRINK NOT FOUND ${err}`);
      }
    };

    getDrinkById();
  }, []);

  return (
    <div
      css={css`
        .drink-details {
          font-size: 5rem;
          text-align: center;
        }

        p {
          font-size: 2rem;
        }

        .back-btn {
          display: flex;
          justify-content: center;
          font-size: 3rem;
        }
      `}
    >
      {loading && (
        <div className="Loader">
          <HashLoader color="#59DEC4" loading={loading} size={60} />
        </div>
      )}

      {!loading && (
        <>
          <div className="drink-details">
            <p>{drinkDetail.strDrink}</p>
          </div>
        </>
      )}

      {!loading && drinkDetail.idDrink !== match.params.id ? (
        <div className="drink-details">{err}</div>
      ) : null}

      {/*Add delay animation using framer motion */}
      <div className="back-btn">
        <Link
          to="/"
          onClick={() => {
            setDrinkDetail([]);
            setErr("");
          }}
        >
          back to home
        </Link>
      </div>
    </div>
  );
};

export default DrinkDetails;
