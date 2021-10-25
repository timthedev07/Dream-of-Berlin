import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
        <img
          className="swiper-image"
          style={{ borderRadius: "15px" }}
          src={"/images/marathon.jpg"}
          alt=""
        />
        <p className="legend">Berlin BWM Marathon</p>
      </div>
      <div>
        <img className="swiper-image" src={"/images/snooker.jpg"} alt="" />
        <p className="legend">
          Dude playing snooker with another guy watching him. Chill, it's just a
          random picture, nothing related to berlin{" ;)"}
        </p>
      </div>
      <div>
        <img className="swiper-image" src={"/images/olympics0.jpg"} alt="" />
        <p className="legend">1936 Summer Olympics</p>
      </div>
      <div>
        <img className="swiper-image" src={"/images/italy.jpg"} alt="" />
        <p className="legend">
          Italy national football team celebrating for winning 2006 World Cup
        </p>
      </div>
    </Carousel>
  );
}
