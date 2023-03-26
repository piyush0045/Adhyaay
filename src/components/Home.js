import background from "../assets/background.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        objectFit: "scale-down",
        height: "100vh",
        overflowY: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: "white", fontWeight: "bolder", fontSize: 80 }}>
        Adhyaay
      </p>
    </div>
  );
};

export default Home;
