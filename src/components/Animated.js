import { useRef } from "react";
import { SCROLL_ANIMATION_DURATION } from "../pages/index.jsx";
import Lazyload from "react-lazyload";

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
  const placeholderRef = useRef();

  const finishLoading = () => {
    setTimeout(() => {
      placeholderRef.current.remove();
    }, 700);
  };

  return (
    <div
      data-aos={
        position === "left"
          ? "fade-right"
          : position === "right"
          ? "fade-left"
          : ""
      }
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      className="info-image-container"
    >
      <div ref={placeholderRef} className="image-placeholder"></div>
      <Lazyload className={`info-image-wrapper`} once offset={200}>
        <img
          onLoad={() => finishLoading()}
          src={image}
          alt="stuff"
          className={`info-image`}
        />
      </Lazyload>
    </div>
  );
};
