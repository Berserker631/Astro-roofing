import ImageSlider from "./ImageSlider";

const App = () => {
  const slides = [
    { url: "./1.jpg", title: "roof", order: 1},
    { url: "./2.jpg", title: "roof", order: 2},
    { url: "./3.jpg", title: "roof", order: 3},
    { url: "./4.jpg", title: "roof", order: 4},
  ];
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0",
  };
  return (
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
  );
};

export default App;
