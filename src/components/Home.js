import background from "../assets/background.jpg";
import styled from "styled-components";
//import fest from "../assets/fest.mp4";
import adhyaay from "../assets/ADHYAAY'22F.mp4";
import { Hidden } from "@mui/material";

const Home = () => {
  return (
    //   <div
    //    style={{
    //      backgroundImage: `url(${background})`,
    //      backgroundPosition: "center",
    //      objectFit: "scale-down",
    //     height: "100vh",
    //      overflowY: "hidden",
    //      display: "flex",
    //      justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //>
    //      <p style={{ color: "white", fontWeight: "bolder", fontSize: 80 }}>
    //       Adhyaay
    // </p>
    //  </div>

    <video  id="videoBG" autoPlay muted loop>
      <source style={{marginTop:"5px",overflowY:"hidden"}} src={adhyaay} type="video/mp4" />
    </video>
  );
};

export default Home;
