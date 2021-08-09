/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const About = () => {
  return (
    <div
      className="About container"
      css={css`
        height: 100vh;
        p {
          font-size: 2rem;
          color: #fff;
        }
      `}
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
        odio! Natus, minus quidem! Nemo facilis aut tenetur! Ipsa laborum,
        expedita quae aliquid facilis eius quo distinctio illum iusto soluta
        dolores odit dolorem molestiae ab non vel. Aut iusto molestias veniam,
        voluptatem numquam sed. Delectus rem voluptatum illo, quisquam
        voluptatibus minima.
      </p>
    </div>
  );
};

export default About;
