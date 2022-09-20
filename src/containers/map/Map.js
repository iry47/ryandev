import React from "react";
import "./Map.css";
import MapComponent from "../../components/map/MapComponent";
import Markers from "../../savedPlaces.json";

import { Fade } from "react-reveal";

function Map(props) {
  const theme = props.theme;
  // saved places from my google maps
  const markers = Markers["features"];

  return (
    <div className="main" id="map">
      <div className="map-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="map-header" style={{ color: theme.text }}>
            Interactive Map
          </h1>
        </Fade>
      </div>
      <div className="map-body-div">
        <MapComponent markers={markers} theme={theme} />
      </div>
    </div>
  );
}

export default Map;
