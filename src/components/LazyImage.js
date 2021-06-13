import React, { useRef } from "react";
import Lazyload from "react-lazyload";

export default function LazyImage({ src, className, borderRadius }) {
  const placeholderRef = useRef();

  const finishLoading = () => {
    setTimeout(() => {
      placeholderRef.current.remove();
    }, 700);
  };

  return (
    <div className="lazy-image-container">
      <div ref={placeholderRef} className="image-placeholder"></div>
      <Lazyload once offset={100}>
        <img
          onLoad={() => finishLoading()}
          src={src}
          alt="lazy"
          className={className ? `lazy-image ` + className : "lazy-image"}
        />
      </Lazyload>
    </div>
  );
}
