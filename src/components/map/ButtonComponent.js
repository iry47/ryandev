import React, { Component } from "react";
import { useMap } from "react-leaflet";
import L, { LeafletMouseEvent, Map } from "leaflet";
import { Icon } from "@iconify/react";

/**
 * Add a button into the OpenStreetMap
 * Takes a callback function to apply on click
 */
class ButtonComponent extends React.Component {
  helpDiv;

  createButtonControl() {
    const MapHelp = L.Control.extend({
      onAdd: (map) => {
        const helpDiv = L.DomUtil.create("button", "");
        this.helpDiv = helpDiv;
        let icon = L.DomUtil.create("span", "iconify");
        icon.setAttribute("data-icon", this.props.icon);
        helpDiv.setAttribute("id", this.props.id);
        helpDiv.appendChild(icon);
        // helpDiv.innerHTML = this.props.title;

        helpDiv.addEventListener("click", this.props.callBack);

        //a bit clueless how to add a click event listener to this button and then
        // open a popup div on the map
        return helpDiv;
      },
    });
    return new MapHelp({ position: this.props.position });
  }

  componentDidMount() {
    const { map } = this.props;
    const control = this.createButtonControl();
    control.addTo(map);
  }

  componentWillUnmount() {
    this.helpDiv.remove();
  }

  render() {
    return null;
  }
}

function withMap(Component) {
  return function WrappedComponent(props) {
    const map = useMap();
    return <Component {...props} map={map} />;
  };
}

export default withMap(ButtonComponent);
