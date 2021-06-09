import { GoogleMap, Marker, InfoWindow } from "react-google-maps";

export default GMap = ({ center }) => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  );
};
