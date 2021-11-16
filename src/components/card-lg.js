import React from "react";

const CardLg = ({
  id,
  urls: {
    small,
    full,
    thumb,
    regular,
  },
  likes,
  description,
  user,
  alt_description,
}) => {
  return (
    <div
      style={{
        width: "250px",
        height: "400px",
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
      <p
        style={{
          padding: "0.2rem",
        }}
      >
        {description}
      </p>
      <p>{user.name}</p>
    </div>
  );
};

export default CardLg;
