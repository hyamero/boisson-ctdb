/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <div
      className="Footer"
      css={css`
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 2rem 0;
        background: #0f0f0f;
        border-top: 3px solid #faa936;
        border-top-right-radius: 50px;
        color: #fff;

        .flex-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          width: 85%;
        }

        .name-wrapper {
          font-family: "Poppins", sans-serif;

          h4,
          h5 {
            font-weight: 200;
            font-size: 1rem;
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

          h6 {
            font-family: "Nanum Brush Script", cursive;
            font-size: 1.7rem;
            letter-spacing: 2px;
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
      `}
    >
      <div className="flex-footer">
        <div className="name-wrapper">
          <h5>&copy; 2021 Boisson</h5>
          <h4>Dale B. | Creator & Designer</h4>
        </div>
        <div className="up-wrap">
          <h6>search for more drinks!</h6>
          <HiArrowNarrowUp className="icon-up" />
        </div>
        <div className="social-icons">
          <a href="https://github.com/hyamero">
            <AiOutlineGithub className="footer-icon" target="_blank" />
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
