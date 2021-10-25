import { FC } from "react";
import { SCROLL_ANIMATION_DURATION } from "../pages/index";

interface AnimatedListProps {
  position?: "left" | "right";
  fullWidth?: boolean;
  animationName?: string;
}

export const AnimatedList: FC<AnimatedListProps> = ({
  children,
  position,
  fullWidth,
  animationName,
}) => {
  return (
    <ul
      className={fullWidth ? "info-paragraph full-width" : "info-paragraph"}
      data-aos={
        animationName || position
          ? position === "right"
            ? "fade-left"
            : "fade-right"
          : ""
      }
      style={{ listStyle: '"⇒  "' }}
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    >
      {children}
    </ul>
  );
};

export const AnimatedParagraph: FC<
  AnimatedListProps & { additionalClassName?: string }
> = ({ children, position, fullWidth, animationName, additionalClassName }) => {
  return (
    <p
      className={
        (fullWidth ? "info-paragraph full-width " : "info-paragraph ") +
          additionalClassName || ""
      }
      data-aos={
        animationName || position
          ? position === "right"
            ? "fade-left"
            : "fade-right"
          : ""
      }
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    >
      {children}
    </p>
  );
};

interface AnimatedImageProps {
  imagePath: string;
  position: "left" | "right";
}
export const AnimatedImage: FC<AnimatedImageProps> = ({
  imagePath,
  position,
}) => {
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
      <div className={`info-image-wrapper`}>
        <img src={imagePath} alt="stuff" className={`info-image`} />
      </div>
    </div>
  );
};
