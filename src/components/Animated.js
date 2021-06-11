import { SCROLL_ANIMATION_DURATION } from "../pages/Home";

export const AnimatedList = ({
  children,
  position,
  fullWidth,
  animationName,
}) => {
  return (
    <ul
      className={fullWidth ? "info-paragraph full-width" : "info-paragraph"}
      data-aos={
        animationName || position === "right" ? "fade-left" : "fade-right"
      }
      style={{ listStyle: '"⇒  "' }}
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    >
      {children}
    </ul>
  );
};

export const AnimatedParagraph = ({
  children,
  position,
  fullWidth,
  animationName,
  additionalClassName,
}) => {
  return (
    <p
      className={
        (fullWidth ? "info-paragraph full-width " : "info-paragraph ") +
          additionalClassName || ""
      }
      data-aos={
        animationName || position === "right" ? "fade-left" : "fade-right"
      }
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    >
      {children}
    </p>
  );
};

export const Image = ({ image, position }) => {
  return (
    <img
      src={image}
      alt="stuff"
      className={`info-image`}
      data-aos={
        position === "left"
          ? "fade-right"
          : position === "right"
          ? "fade-left"
          : ""
      }
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    />
  );
};
