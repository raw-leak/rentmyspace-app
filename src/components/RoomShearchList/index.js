import React, { useEffect, useState } from "react";
import axios from "axios";
import { RoomShearchListContainer } from "./styles";
import RoomForList from "../../elements/RoomForList";

function RoomShearchList({}) {
  const [list, setList] = useState([]);

  useEffect(async () => {
    debugger
    const rooms = await axios.get("http://localhost:6060/room", { headers: {} });
    debugger
  }, []);

  return (
    <RoomShearchListContainer>
      {list && list.length > 0 ? (
        list.map(room => <RoomForList room={room} />)
      ) : (
        <p>No hay nada</p>
      )}
    </RoomShearchListContainer>
  );
}

export default RoomShearchList;
