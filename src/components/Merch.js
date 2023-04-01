import merch from "../assets/merch.jpg";

const Merch = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${merch})`,

        backgroundSize: "cover", backgroundPosition: "center"
      }}
    ></div>
  );
};

export default Merch;
