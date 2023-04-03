import devanshsep from "../assets/devanshsep.jpeg";
import daaru from "../assets/Daaru.jpg";
import Raj1 from "../assets/Raj1.jpg";
import raunak2 from "../assets/raunak2.jpg";

import { Typography } from "@mui/material";

const profiles = [
  {
    name: "Devansh Singh",
    img: devanshsep,
    position: "Secretary",
  },
  {
    name: "Raj Gautam",
    img: Raj1,
    position: "Web-D Head",
  },
  {
    name: "Raunak Agarwal",
    img: raunak2,
    position: "Co-Secretary",
  },
  {
    name: "Daaru",
    img: daaru,
    position: "69",
  },
  {
    name: "Devansh Singh",
    img: devanshsep,
    position: "Secretary",
  },
];

const Team = () => {
  return (
    <div className="team" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      {profiles.map((profile, i) => (
        <div
          key={i}
          style={{
            borderWidth: 10,
            borderColor: "white",
            padding: 30,
          }}
        >
          <Typography
            variant="h6"
            color={"#eee8aa"}
            style={{ textAlign: "center" }}
          >
            {profile.position}
          </Typography>
          <img className="about-page-img" src={profile.img} />
        </div>
      ))}
    </div>
  );
};

export default Team;
