import React, { FC } from "react";

interface OlympianCardProps {
  imagePath: string;
  name: string;
  description: string;
  position?: string;
  noOffset: boolean;
}
export const OlympianCard: FC<OlympianCardProps> = ({
  imagePath,
  name,
  description,
  position,
  noOffset,
}) => {
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
        <img
          src={imagePath}
          alt="lazy"
          className="lazy-image olympian-card__image"
        />
      </div>
    </div>
  );
};
