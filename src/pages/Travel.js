import React from "react";
import Nav from "../components/Nav";

export default function Products() {
  const restaurants = [
    [
      { lat: 52.52555223870703, lng: 13.407951269950583 },
      "Shiori Japanese Restaurant",
    ],
    [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
    [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
    [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
    [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
  ];

  useEffect(() => {
    // const map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 12,
    //   center: { lat: 34.84555, lng: -111.8035 },
    // });
    // // Create an info window to share between markers.
    // // const infoWindow = new google.maps.InfoWindow();
    // // Create the markers.
    // tourStops.forEach(([position, title], i) => {
    //   const marker = new google.maps.Marker({
    //     position,
    //     map,
    //     title: `${i + 1}. ${title}`,
    //     label: `${i + 1}`,
    //     optimized: false,
    //   });
    //   // Add a click listener for each marker, and set up the info window.
    //   marker.addListener("click", () => {
    //     infoWindow.close();
    //     infoWindow.setContent(marker.getTitle());
    //     infoWindow.open(marker.getMap(), marker);
    //   });
    // });
  });

  return (
    <>
      <div className="page-header" id="travel-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Travel Guide</h1>
      </div>
      <div id="travel-page" className="page-content">
        <div className="content-section"></div>
      </div>
    </>
  );
}
