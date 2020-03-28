import React, { useState, useEffect } from "react";
import { MainSection } from "./styles";

function Map({ lat, lng }) {
  useEffect(() => {
    renderMap();
    window.initMap = initMap;
  }, []);

  const loadScript = url => {
    const index = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  };

  const renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ0ddJlxpRCrcAeRtp-D0bhL1n_H-gxQE&callback=initMap"
    );
  };

  const initMap = ({ lat, lng }) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  return <MainSection id="map"></MainSection>;
}

export default Map;
