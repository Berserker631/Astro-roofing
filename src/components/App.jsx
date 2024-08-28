import ImageSlider from "./ImageSlider";
import "./imageSlider.css";

const App = () => {
  const slides = [
    { url: "./material/1.jpg", title: "roof", order: 1},
    { url: "./material/2.jpg", title: "roof", order: 2},
    { url: "./material/3.jpg", title: "roof", order: 3},
    { url: "./material/4.jpg", title: "roof", order: 4},
  ];
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0",
  };
  return (
      <div style={containerStyles} className="image-container">
        <ImageSlider slides={slides}/>
      </div>
  );
};

export default App;
