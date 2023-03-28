import Event from "../assets/Event.jpg";
import EventCard from "./EventCard";
import Daaru from '../assets/Daaru.jpg'

const events = [
  {
    name: "Voice of HBTU",
    des: "Calling all musical mavens, lyrical legends, and vocal virtuosos - HBTU's annual cultural fest, Adhyaay, is proud to present The Voice of HBTU, the ultimate musical competition of the year! As the legendary Bob Marley once said, One good thing about music, when it hits you, you feel no pain.And that's exactly what we're aiming for - to make you feel the rhythm, to move your body and your soul, and to create an unforgettable experience that you'll cherish for years to come.So, whether you're into pop, rock, R&B, or any other genre, we invite you to join us and show the world what you've got. The Voice of HBTU is not just a competition - it's a celebration of music, creativity, and the power of the human voice. Are you ready to raise the roof and make some noise? Then come and join us at Adhyaay, and let your voice be heard!",
    img: Daaru
  },
  {
    name: "Voice of HBTU",
    des: "Calling all musical mavens, lyrical legends, and vocal virtuosos - HBTU's annual cultural fest, Adhyaay, is proud to present The Voice of HBTU, the ultimate musical competition of the year! As the legendary Bob Marley once said, One good thing about music, when it hits you, you feel no pain.And that's exactly what we're aiming for - to make you feel the rhythm, to move your body and your soul, and to create an unforgettable experience that you'll cherish for years to come.So, whether you're into pop, rock, R&B, or any other genre, we invite you to join us and show the world what you've got. The Voice of HBTU is not just a competition - it's a celebration of music, creativity, and the power of the human voice. Are you ready to raise the roof and make some noise? Then come and join us at Adhyaay, and let your voice be heard!",
    img: Daaru
  },
  {
    name: "Voice of HBTU",
    des: "Calling all musical mavens, lyrical legends, and vocal virtuosos - HBTU's annual cultural fest, Adhyaay, is proud to present The Voice of HBTU, the ultimate musical competition of the year! As the legendary Bob Marley once said, One good thing about music, when it hits you, you feel no pain.And that's exactly what we're aiming for - to make you feel the rhythm, to move your body and your soul, and to create an unforgettable experience that you'll cherish for years to come.So, whether you're into pop, rock, R&B, or any other genre, we invite you to join us and show the world what you've got. The Voice of HBTU is not just a competition - it's a celebration of music, creativity, and the power of the human voice. Are you ready to raise the roof and make some noise? Then come and join us at Adhyaay, and let your voice be heard!",
    img: Daaru
  },
  {
    name: "Voice of HBTU",
    des: "Calling all musical mavens, lyrical legends, and vocal virtuosos - HBTU's annual cultural fest, Adhyaay, is proud to present The Voice of HBTU, the ultimate musical competition of the year! As the legendary Bob Marley once said, One good thing about music, when it hits you, you feel no pain.And that's exactly what we're aiming for - to make you feel the rhythm, to move your body and your soul, and to create an unforgettable experience that you'll cherish for years to come.So, whether you're into pop, rock, R&B, or any other genre, we invite you to join us and show the world what you've got. The Voice of HBTU is not just a competition - it's a celebration of music, creativity, and the power of the human voice. Are you ready to raise the roof and make some noise? Then come and join us at Adhyaay, and let your voice be heard!",
    img: Daaru
  },
];

const Events = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Event})`,
        objectFit: "scale-down",
        height: "100vh",
        // overflowY: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0b161a",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {events.map((ev) => (
          <EventCard name={ev.name} des={ev.des} img={ev.img}/>
        ))}
      </div>
    </div>
  );
};

export default Events;
