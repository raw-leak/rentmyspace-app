import React from "react";
import { BodySection } from "./styles";
import List from "../../elements/List";
import Map from "../../elements/Map";

function Body() {
  return (
    <BodySection>
      <List />
      <Map />
    </BodySection>
  );
}

export default Body;
