import React from "react";
import { useLocation } from "react-router-dom";

const EventDetail = () => {
  const route = useLocation();
  const { des ,name} = route.state;
  // console.log("Description",des)
  return (
    <div
      style={{
        backgroundColor:"black",
        backgroundPosition: "center",
       objectFit: "scale-down",
        height: "100vh",
        overflowY: "hidden",
       display: "flex",
        justifyContent: "center",
       alignItems: "center",
       flexDirection: 'column'
      }}
    >
      <h1 style = {{color:"#eee8aa",position: 'absolute', top: 80}}>{name}</h1>
      <p style = {{color:"#eee8aa",fontSize:"20px",paddingLeft: 20,paddingRight: 20}}>
   {des}</p>
    </div>
  );
};

export default EventDetail;
