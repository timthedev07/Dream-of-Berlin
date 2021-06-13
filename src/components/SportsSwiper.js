import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Snooker from "../images/snooker.jpg";
import Marathon from "../images/marathon.jpg";
import LazyImage from "./LazyImage";
import Olympics0 from "../images/olympics0.jpg";
import Italy from "../images/italy.jpg";

export default function SportsCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      swipeable
      emulateTouch
      interval={2000}
      infiniteLoop
      statusFormatter={() => ""}
      className="sports-carousel"
    >
      <div>
        <LazyImage
          className="swiper-image"
          borderRadius="15px"
          src={Marathon}
        />
        <p className="legend">Berlin BWM Marathon</p>
      </div>
      <div>
        <LazyImage className="swiper-image" src={Snooker} />
        <p className="legend">
          Dude playing snooker with another guy watching him. Chill, it's just a
          random picture, nothing related to berlin{" ;)"}
        </p>
      </div>
      <div>
        <LazyImage className="swiper-image" src={Olympics0} />
        <p className="legend">1936 Summer Olympics</p>
      </div>
      <div>
        <LazyImage className="swiper-image" src={Italy} />
        <p className="legend">
          Italy national football team celebrating for winning 2006 World Cup
        </p>
      </div>
    </Carousel>
  );
}
