import { useEffect, useState } from "react";
import ReactGLMap, { Marker, Popup } from "react-map-gl";
import { SCROLL_ANIMATION_DURATION } from "../pages/index";
import {
  AttractionData,
  attractions,
  RestaurantData,
  restaurants,
} from "../data/MapData";
import "mapbox-gl/dist/mapbox-gl.css";

const DEV_MODE = false;

export const RestaurantMap = () => {
  const [mapState, setMapState] = useState({
    latitude: 52.52138088473879,
    longitude: 13.406859916716096,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  const [selectedSpot, setSelectedSpot] = useState<RestaurantData | null>(null);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSpot(null);
      }
    };
    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      className="attractions-map-container"
    >
      {!DEV_MODE ? (
        <ReactGLMap
          {...mapState}
          className="attractions-map info-paragraph"
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_API}
          onViewportChange={(newState: any) => {
            setMapState(newState);
          }}
          mapStyle="mapbox://styles/im-just-a-dev/ckpr6pit02jhi18qhjckjcdzg"
        >
          {restaurants.map((each) => {
            return (
              <Marker
                key={`${each.name}`}
                latitude={each.latitude}
                longitude={each.longitude}
              >
                <img
                  src="/images/icons/marker.svg"
                  alt=""
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSpot(each);
                  }}
                  className="mapbox-marker-inner"
                />
              </Marker>
            );
          })}
          {selectedSpot ? (
            <Popup
              latitude={selectedSpot.latitude}
              longitude={selectedSpot.longitude}
              onClose={() => {
                setSelectedSpot(null);
              }}
            >
              <div className="popup-inner-wrapper">
                <h4 className="black-text" style={{ width: "min-content" }}>
                  {selectedSpot.name}
                </h4>
              </div>
            </Popup>
          ) : null}
        </ReactGLMap>
      ) : (
        <h3>MAP NOT SHOWN FOR DEVELOPMENT PURPOSES</h3>
      )}
    </div>
  );
};

export const AttractionsMap = () => {
  const [mapState, setMapState] = useState({
    latitude: 52.51840081213372,
    longitude: 13.407192205938227,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  const [selectedSpot, setSelectedSpot] = useState<AttractionData | null>(null);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSpot(null);
      }
    };
    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, []);

  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      className="attractions-map-container"
    >
      {DEV_MODE ? (
        <h3>MAP NOT SHOWN FOR DEVELOPMENT PURPOSES</h3>
      ) : (
        <ReactGLMap
          {...mapState}
          className="attractions-map info-paragraph"
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_API}
          onViewportChange={(newState: any) => {
            setMapState(newState);
          }}
          mapStyle="mapbox://styles/im-just-a-dev/ckpr6pit02jhi18qhjckjcdzg"
        >
          {attractions.map((each) => {
            return (
              <Marker
                key={`${each.name}`}
                latitude={each.latitude}
                longitude={each.longitude}
              >
                <img
                  src="/images/icons/marker.svg"
                  alt=""
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSpot(each);
                  }}
                  className="mapbox-marker-inner"
                />
              </Marker>
            );
          })}
          {selectedSpot ? (
            <Popup
              latitude={selectedSpot.latitude}
              longitude={selectedSpot.longitude}
              onClose={() => {
                setSelectedSpot(null);
              }}
            >
              <div className="popup-inner-wrapper">
                <h4 className="black-text" style={{ width: "min-content" }}>
                  {selectedSpot.name}
                </h4>
                <img
                  className="popup-img"
                  src={selectedSpot.imgPath}
                  alt="beautiful place"
                />
              </div>
            </Popup>
          ) : null}
        </ReactGLMap>
      )}
    </div>
  );
};
