import React, { useRef } from "react";
import LazyLoad from "react-lazyload";

export default function OlympianCard({
  image,
  name,
  description,
  position,
  noOffset,
}) {
  const placeholderRef = useRef();

  const finishLoading = () => {
    setTimeout(() => {
      placeholderRef.current.remove();
    }, 300);
  };

  return (
    <div
      key={name}
      className={
        `olympian-card olympian-card-${position}` +
        `${noOffset ? " no-offset" : ""}`
      }
      data-aos="fade-up"
      data-aos-duration={"2200"}
      data-aos-once="true"
    >
      <div className="olympian-card__text-container">
        <h1 className="olympian-card__heading">{name}</h1>
        <h4 className="olympian-card__paragraph">{description}</h4>
      </div>
      <div className="lazy-image-container olympian-card__image-container">
        <div ref={placeholderRef} className="image-placeholder"></div>
        <LazyLoad once offset={100}>
          <img
            onLoad={() => finishLoading()}
            src={image}
            alt="lazy"
            className="lazy-image olympian-card__image"
          />
        </LazyLoad>
      </div>
    </div>
  );
}
