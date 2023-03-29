import background from "../assets/background.jpg";
import styled from "styled-components";
import fest from "../assets/fest.mp4";

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
    <div className = "videoTag">
      <video
        className="video"
        autoPlay
        loop
        muted
        style={{
         

        }}
      >
        <source src={fest} type="video/mp4" />
      </video>
      <p
        style={{
          color: "Background",
          fontWeight: "bolder",
          fontSize: 80,
          position: "absolute",
          top: 100,
          left: 300
        }}
      >
        Adhyaay
      </p>
    </div>
  );
};

export default Home;
