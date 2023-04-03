//import fest from "../assets/fest.mp4";
import adhyaay from "../assets/ADHYAAY'22F.mp4";

const Home = () => {
  return (
    <video id="videoBG" autoPlay loop controls style={{ marginTop: -170 }}>
      <source src={adhyaay} type="video/mp4" />
    </video>
  );
};

export default Home;
