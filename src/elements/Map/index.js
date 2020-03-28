import React, { useState, useEffect } from "react";
import { MainSection } from "./styles";

function Map() {
  const [initCoords, setInitCoords] = useState({
    lat: 41.3887901,
    lng: 2.1589899
  });
  
  useEffect(() => {
    renderMap();
    window.initMap = initMap;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setInitCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      /* la geolocalización NO está disponible */
    }
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

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: initCoords.lat, lng: initCoords.lng },
      zoom: 8
    });
  };

  return <MainSection id="map"></MainSection>;
}

export default Map;
