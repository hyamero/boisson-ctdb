/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import React from "react";

const DrinkDetails = ({ match }) => {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [btn, setBtn] = useState("back to home");
  const [color, setColor] = useState("#59DEC4");

  useEffect(() => {
    const getDrinkById = async () => {
      try {
        const res = await axios.get(
          ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        setDrinkDetail(res.data.drinks[0]);
        setLoading(false);
        console.log(res);
      } catch (err) {
        setLoading(false);
        setErr("404 PAGE NOT FOUND");
        console.error(err);
      }
    };

    getDrinkById();
    setLoading(true);
    console.log(match);
  }, []);

  console.log(drinkDetail);

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
          <HashLoader color={color} loading={loading} size={60} />
        </div>
      )}

      {!loading && drinkDetail.idDrink !== match.params.id ? (
        <div className="drink-details">{err}</div>
      ) : null}

      {!loading && (
        <>
          <div className="drink-details">
            <p>{drinkDetail.strDrink}</p>
          </div>
        </>
      )}

      {/*Add delay animation using framer motion */}
      <div className="back-btn">
        <Link
          to="/"
          onClick={() => {
            setDrinkDetail([]);
            setErr("");
            setBtn("");
          }}
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default DrinkDetails;
