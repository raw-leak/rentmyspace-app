import React from "react";
import { ButtonContainer } from "./styles";
import Button from "@material-ui/core/Button";

function HeaderButton() {
  return (
    <ButtonContainer>
      <Button variant="outlined" color="primary" size="small">
        Registra tu espacio
      </Button>
      <Button variant="contained" color="primary" size="small">
        Iniciar Session
      </Button>
      <Button variant="contained" color="primary" size="small">
        Registro
      </Button>
    </ButtonContainer>
  );
}

export default HeaderButton;
