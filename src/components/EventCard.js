import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ name, des, img }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        width: 300,
        height: 200,
        color: "#eee8aa",
        padding: 30,
        marginBottom: 50,
      }}
      to={`/event/${name}`}
      state={{ des: des, name: name }}
    >
      <img src={img} style={{ width: 200, height: 200 }} />
      <p style={{ textAlign: "center" }}>{name}</p>
    </Link>
  );
};

export default EventCard;
