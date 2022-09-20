import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Travels from "../../containers/travel/Travels";

// import TravelImg from "./TravelImg";
import "./Travel.css";
import { Fade } from "react-reveal";
import Blogs from "../../containers/blogs/Blogs";

function Travel(props) {
  const theme = props.theme;
  return (
    <div className="travel-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-travel">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <img
                alt="The world"
                src={require("../../assets/images/illustration_world.png")}
              ></img>
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Travel
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Recommendations and Guides
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                My success in travel is primarily thanks to the people I've met
                along the way. To continue passing it foreward I wanted to
                provided some fun spots I found throughout my travels, and
                explain in detail a couple things I found truly special.
              </p>
            </div>
          </div>
        </Fade>
        <Travels theme={props.theme} />
        <Blogs theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Travel;
