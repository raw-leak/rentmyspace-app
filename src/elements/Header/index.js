import React from "react";
import { HeaderContainer,InputContainer } from "./styles";
import HeaderButtons from "../HeaderButtons";
import SearchInput from "../SearchInput";
import Register from "../../components/Register";

function Map() {
  return (
    <HeaderContainer>
      <HeaderButtons />
      <SearchInput />
      {/* <Register /> */}
    </HeaderContainer>
    <HeaderContainer>
    </HeaderContainer>

  );
}

export default Map;
