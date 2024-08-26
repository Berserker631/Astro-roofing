import { useState, useEffect } from "react";

const rightArrowStyles = {
  display: "none",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  display: "none",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100vh",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const text = {
  textAlign: "center",
  margin: "5px",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 850,
  color: "#E1261D",
  fontStyle: "bold",
  textShadow: "3px 3px rgba(0, 0, 0, 0.3)",
  fontSize: "6vw",
  maxFontSize: "6vw"
}

const body = {
  textAlign: "center",
  fontSize: "3vw",
  margin: "0",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 700,
  color: "#fff",
  paddingLeft: "10px",
  fontStyle: "bolder",
  textShadow: "3px 3px rgba(0, 0, 0, 0.3)"
}

const leyend = {
  boxSizing: "border-box",
  zIndex: 4,
  padding: "5px",
  position: "absolute",
  top: "15rem",
  left: "0",
  backgroundColor: 'transparent',
  width: "100%",
  height: "17em",
}


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
        <div style={leyend} >
          <h1 style={text}>BUILDING PROTECTION</h1>
          <h2 style={body}>ROOF TO ROOF</h2>
        </div>
      </div>
        <img src={slides[currentIndex].url} alt={`Slide ${currentIndex + 1}`} style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '0% 0%' }}/>
      <div style={dotsContainerStyles}>
        {slides.map((x) => (
          <div
            style={dotStyle}
            key={x.order}
            onClick={() => goToSlide(x.order)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
