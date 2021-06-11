import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const LazyImage = ({ src, alt, className }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    if (!refPlaceholder.current) return;
    refPlaceholder.current.remove();
  };

  return (
    // <>
    //   <Placeholder ref={refPlaceholder} />
    //   <LazyLoad>
    //     <img
    //       onLoad={removePlaceholder}
    //       onError={removePlaceholder}
    //       src={src}
    //       alt={alt}
    //       className={className}
    //     />
    //   </LazyLoad>
    // </>
    <img
      onLoad={removePlaceholder}
      onError={removePlaceholder}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LazyImage;
