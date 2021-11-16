import React from "react";

const CardSm = ({
  photo,
  setSinglePhoto,
  setShow,
}) => {
  const {
    urls: { thumb },
    alt_description,
  } = photo;
  return (
    <div
      style={{
        width: "250px",
        height: "300px",
      }}
      onClick={() => {
        setShow(true);
        setSinglePhoto(photo);
      }}
    >
      <img
        src={thumb}
        style={{
          width: "250px",
          height: "250px",
        }}
        alt={alt_description}
      />
    </div>
  );
};

export default CardSm;
