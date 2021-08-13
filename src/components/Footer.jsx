/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";

const Footer = ({ scrollUp, setScrollUp }) => {
  //@emotion media query
  const breakpoints = [576, 768, 992, 1200, 1320, 1480];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Footer"
      css={css`
        position: absolute;
        width: 100%;
        padding: 2rem;
        background: #0f0f0f;
        border-top: 3px solid #faa936;
        border-top-right-radius: 50px;
        color: #fff;

        ${mq[1]} {
          padding: 1rem 2rem;
        }

        .flex-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          margin-bottom: 1rem;
          width: 85%;

          ${mq[1]} {
            flex-direction: column-reverse;

            h4 {
              margin-top: 5px;
            }
          }
        }

        .name-wrapper {
          font-family: "Poppins", sans-serif;

          h4 {
            font-weight: 400;
            font-size: 1rem;

            ${mq[1]} {
              font-size: 0.9rem;
            }
          }
        }

        a .footer-icon {
          margin: 0 0.7rem;
          font-size: 1.4rem;
          color: #fff;
          transition: linear 0.3s;

          &:hover {
            color: #faa936;
          }
        }

        a .discord-icon {
          font-size: 1.2rem;
        }

        .up-wrap {
          display: flex;
          position: relative;
          bottom: 4rem;
          justify-content: center;

          ${mq[1]} {
            bottom: 2.8rem;
          }

          h6 {
            font-family: "Nanum Brush Script", cursive;
            font-size: 1.7rem;
            letter-spacing: 2px;
            white-space: nowrap;
          }

          .icon-up {
            transform: rotate(10deg);
            font-size: 1.8rem;
            color: #faa936;
            border: 2px solid #faa936;
            padding: 3px;
            border-radius: 50%;
            position: relative;
            bottom: 9px;
            left: 4px;
            transition: linear 0.2s;

            &:hover {
              transform: scale(1.2);
            }
          }
        }

        .social-icons {
          display: flex;
          flex-wrap: nowrap;
        }
      `}
    >
      <div className="up-wrap">
        <h6>search for more drinks!</h6>
        <HiArrowNarrowUp
          className="icon-up"
          onClick={() => setScrollUp(!scrollUp)}
        />
      </div>
      <div className="flex-footer">
        <div className="name-wrapper">
          <h4>&copy; 2021 Dale B. All rights reserved</h4>
        </div>
        <div className="social-icons">
          <a href="https://github.com/hyamero" target="_blank">
            <AiOutlineGithub className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/dale.ps/" target="_blank">
            <AiOutlineInstagram className="footer-icon" />
          </a>
          <a href="https://discord.com/channels/@me" target="_blank">
            <FaDiscord className="footer-icon discord-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
