import React from "react";
import "./Map.css";
import MapComponent from "../../components/map/MapComponent";
import Markers from "../../google_maps/savedPlaces.json";
import { Fade } from "react-reveal";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import food from "../../assets/images/markers/food.svg";
import cafe from "../../assets/images/markers/cafe.svg";
import hostel from "../../assets/images/markers/hostel.svg";
import market from "../../assets/images/markers/market.svg";
import money from "../../assets/images/markers/money.svg";
import outdoors from "../../assets/images/markers/outdoors.svg";
import travel from "../../assets/images/markers/travel.svg";
import tourism from "../../assets/images/markers/tourism.svg";
import other from "../../assets/images/markers/other.svg";

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
        <div className="map-accord">
          <ThemeProvider
            theme={theme.name === "light" ? LightTheme : DarkTheme}
          >
            <Accordion onChange={({ expanded }) => console.log(expanded)}>
              <Panel
                className="accord-panel"
                title="Marker Legend"
                key="maplegend"
              >
                <div className="legend">
                  <div className="legendItem">
                    <img src={cafe} className="legendImage" />
                    <p className="legendText">cafe</p>
                  </div>
                  <div className="legendItem">
                    <img src={food} className="legendImage" />
                    <p className="legendText">Food</p>
                  </div>
                  <div className="legendItem">
                    <img src={hostel} className="legendImage" />
                    <p className="legendText">hostel</p>
                  </div>
                  <div className="legendItem">
                    <img src={market} className="legendImage" />
                    <p className="legendText">market</p>
                  </div>
                  <div className="legendItem">
                    <img src={money} className="legendImage" />
                    <p className="legendText">money</p>
                  </div>
                  <div className="legendItem">
                    <img src={other} className="legendImage" />
                    <p className="legendText">other</p>
                  </div>
                  <div className="legendItem">
                    <img src={outdoors} className="legendImage" />
                    <p className="legendText">outdoors</p>
                  </div>
                  <div className="legendItem">
                    <img src={tourism} className="legendImage" />
                    <p className="legendText">tourism</p>
                  </div>
                  <div className="legendItem">
                    <img src={travel} className="legendImage" />
                    <p className="legendText">travel</p>
                  </div>
                </div>
              </Panel>
            </Accordion>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default Map;
