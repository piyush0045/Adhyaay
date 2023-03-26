import { Box, Typography } from "@mui/material";
import Team from "../components/Carousel";

const About = () => {
  return (
    <div className="body">
      <Typography
        variant="h2"
        style={{
          marginTop: "60px",
          marginLeft: "20px",
          color: "white",
          fontFamily: "serif",
        }}
      >
        About
      </Typography>
      <Typography
        style={{ color: "white", fontFamily: "serif", marginLeft: "20px" }}
      >
        ADHYAAY is the annual literary-cum-cultural fest of HBTU. It is expected
        that ADHYAAY'23 will have 10,000+ footfalls and hence it will be larger
        than ever. A total of 3 days into Adhyaay will witness various events
        coming from all the sub-councils of HBTU. ADHYAAY brings the combined
        list of events from cultural, literary, hobby and photography
        sub-councils into one bracket
      </Typography>

      <Typography
        variant="h2"
        style={{
          marginTop: "40px",
          marginLeft: "20px",
          color: "white",
          fontFamily: "serif",
        }}
      >
        Meet The Team
      </Typography>
      <div style={{paddingBottom: 30, paddingLeft: 40, paddingRight: 40}}>
        <Team />
      </div>
    </div>
  );
};

export default About;
