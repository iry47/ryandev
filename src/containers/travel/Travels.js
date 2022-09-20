import React from "react";
import "./Travels.css";
import { Fade } from "react-reveal";
import Map from "../map/Map";

function Travels(props) {
  const theme = props.theme;

  return (
    <div className="main" id="travels">
      <div className="travels-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="travels-header" style={{ color: theme.text }}>
            Recommendations
          </h1>
          <Map theme={theme} />
        </Fade>
      </div>
      <div className="travels-body-div"></div>
    </div>
  );
}

export default Travels;
