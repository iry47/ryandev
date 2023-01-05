import React, { useState, useEffect, useRef } from "react";
import "./MapComponent.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../../assets/images/marker.png";
import ButtonComponent from "./ButtonComponent";
import useGeoLocation from "./useGeoLocation";
import AwesomeMarkers from "../../leaflet.awesome-markers";

function MapComponent(props) {
  const markers = props.markers;
  const [locate, setLocate] = useState([]);

  //expand map to full screen or shrink to default size
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    let mapDiv = document.querySelector("#mapDiv");
    if (expand == true) mapDiv.classList.add("full");
    else mapDiv.classList.remove("full");

    console.log(`expand useeffect ${expand}`);
  }, [expand]);

  const toggleExpand = () => {
    setExpand(true);
  };
  const toggleShrink = () => {
    setExpand(false);
  };

  const mapRef = useRef();

  const location = null;
  // const location = useGeoLocation();

  // NOT WORKING

  // const toggleLocation = () => {
  //   console.log("locaiton togle", locate)
  //   if (locate.loaded == true) {
  //     mapRef.current.leafletElement.flyTo(
  //       [locate.coordinates.lat, locate.coordinates.lng],
  //       9,
  //       { animate: true }
  //     );
  //   } else {
  //     alert(locate.error.message);
  //   }
  // }

  // useEffect(() => {
  //   console.log("useeffect location", location)
  //   setLocate(location)
  //   if (location.loaded == true) {
  //     mapRef.current.leafletElement.flyTo(
  //       [location.coordinates.lat, location.coordinates.lng],
  //       9,
  //       { animate: true }
  //     );
  //   }
  // }, [location])

  // set marker icon
  const markerIcons = new L.Icon({
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  });

  const markerIcon = new L.AwesomeMarkers.icon({
    icon: "coffee",
    markerColor: "red",
  });

  function MapView() {
    let map = useMap();
    map.setView([20.0, -30.0], map.getZoom());
    //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    <div>
      <div id="mapDiv" className="map-main-div">
        <MapContainer
          classsName="map"
          center={[0.0, 0.0]}
          zoom={2}
          scrollWheelZoom={true}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ButtonComponent
            icon={"fluent:arrow-expand-20-filled"}
            position={"topright"}
            id={"expand"}
            callBack={toggleExpand}
          />
          <ButtonComponent
            icon={"lucide:shrink"}
            position={"topright"}
            id={"shrink"}
            callBack={toggleShrink}
          />
          {/* <ButtonComponent
        icon={"ion:locate-outline"}
        position={"bottomright"}
        id={"locater"}
        callBack={showMyLocation}
      /> */}
          {markers.map((marker) => {
            return (
              <Marker
                icon={markerIcon}
                position={[
                  marker.geometry.coordinates[1],
                  marker.geometry.coordinates[0],
                ]}
              >
                <Popup>
                  {marker.properties.Title}
                  <br></br>
                  <a href={marker.properties["Google Maps URL"]}>
                    View in Google Maps
                  </a>
                </Popup>
              </Marker>
            );
          })}
          <MapView />
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
