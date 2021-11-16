import React from "react";
import CardSm from "./card-sm";

const Cards = ({
  data,
  setSinglePhoto,
  setShow,
}) => {
  return data.map((photo) => (
    <CardSm
      key={photo.id}
      photo={photo}
      setSinglePhoto={
        setSinglePhoto
      }
      setShow={setShow}
    />
  ));
};

export default Cards;
