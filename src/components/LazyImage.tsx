import { FC } from "react";

interface LazyImageProps {
  src: string;
  className: string;
}
/**
 * The component name is lazyimage but it's actually not cause we are switching to nextjs.
 * @param param0
 * @returns
 */
export const LazyImage: FC<LazyImageProps> = ({ src, className }) => {
  return (
    <div className="lazy-image-container">
      <img
        src={src}
        alt="lazy"
        className={className ? `lazy-image ` + className : "lazy-image"}
      />
    </div>
  );
};
