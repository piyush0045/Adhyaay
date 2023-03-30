import React from "react";
import { useLocation } from "react-router-dom";

const EventDetail = () => {
  const route = useLocation();
  const { des } = route.state;
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
      }}
    >
      <p style = {{color:"#eee8aa",lineHeight:"40px",marginTop:"-60px",fontSize:"20px"}}>
   {des}</p>
    </div>
  );
};

export default EventDetail;
