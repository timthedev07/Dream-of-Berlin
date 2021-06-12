import { useEffect, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import ReactGLMap, { Marker, Popup } from "react-map-gl";
import { ReactComponent as MarkerIcon } from "../icons/marker.svg";
import { SCROLL_ANIMATION_DURATION } from "../pages/Home";
import { attractions, pushPins } from "./MapData";

const DEV_MODE = false;

export const RestaurantMap = () => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      id="restaurant-map"
    >
      {!DEV_MODE ? (
        <ReactBingmaps
          bingmapKey={process.env.REACT_APP_BING_MAPS_API}
          zoom={11}
          disableScrollWheelZoom={true}
          center={[52.52138088473879, 13.406859916716096]}
          infoboxesWithPushPins={pushPins}
        ></ReactBingmaps>
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

  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    const listener = (e) => {
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
          mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API}
          onViewportChange={(newState) => {
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
                <MarkerIcon
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSpot({
                      name: each.name,
                      latitude: each.latitude,
                      longitude: each.longitude,
                      imgUrl: each.imgUrl,
                    });
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
                  src={selectedSpot.imgUrl}
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
