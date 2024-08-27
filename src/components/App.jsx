import ImageSlider from "./ImageSlider";

const App = () => {
  const slides = [
    { url: "https://euphonious-sprinkles-624dce.netlify.app/public/2.jpg", title: "roof", order: 1},
//    { url: "./public/2.jpg", title: "roof", order: 2},
 //   { url: "public/3.jpg", title: "roof", order: 3},
   // { url: "../../public/4.jpg", title: "roof", order: 4},
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
