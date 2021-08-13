/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Loader = () => {
  return (
    <div
      id="box"
      css={css`
        .tile01 {
          margin: auto;
          width: 200px;
          height: 100px;
        }

        .mask {
          position: relative;
          top: 5px;
          margin: auto;
          width: 200px;
          height: 100px;

          font-size: 60px;
          font-weight: 700;
          font-family: "Playfair Display", serif;
          font-style: italic;
          text-align: center;
          line-height: 90px;
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2),
            0px 2px 0px rgba(255, 255, 255, 0.3);

          background-image: -webkit-radial-gradient(
            center 10px,
            80px 100px,
            #111111 50%,
            #ffb144 51%
          );

          background-size: 40px 110px;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation-name: wave-animation;
          animation-name: wave-animation;
          -webkit-animation-duration: 13s;
          animation-duration: 13s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
        }

        @keyframes wave-animation {
          0% {
            background-position: 200px 10px;
          }
          25% {
            background-position: 0px -40px;
          }
        }
      `}
    >
      <div className="tile01">
        <div className="mask">boisson</div>
      </div>
    </div>
  );
};

export default Loader;
