import { useState, useEffect } from "react";

const sliderStyles = {
  position: "relative",
  height: "100vh",
};

const top = {
  textAlign: "start",
  fontSize: "large",
  margin: "5px",
  fontWeight: 700,
  color: "#cacaca",
  fontStyle: "bold",
  paddingLeft: "10px",
  fontFamily: "Roboto, sans-serif",
  textShadow: "3px 3px rgba(0, 0, 0, 0.4)"

}

const mid = {
  textAlign: "start",
  fontSize: "3em",
  margin: "0",
  fontFamily: "DM Serif Text, serif",
  fontWeight: 700,
  color: "#fff",
  paddingLeft: "10px",
  fontStyle: "bolder",
  textShadow: "2px 2px rgba(0, 0, 0, 0.3)"
}

// const bottom = {
//   textAlign: "start",
//   fontSize: "x-large",
//   margin: "0",
//   color: "#fff",
//   fontFamily: "Roboto, sans-serif",
//   paddingLeft: "10px",
//   textShadow: "3px 3px rgba(0, 0, 0, 0.3)"

// }

const leyend = {
  boxSizing: "border-box",
  zIndex: 4,
  padding: "5px",
  position: "absolute",
  top: "35%",
  left: "10%",
  width: "40vw",
  height: "35em",
}

const contact = {
  backgroundColor: "#E1261D",
  color: "#fff",
  fontStyle: "bold",
  fontSize: "large",
  shadowBox: "3px 3px rgba(0, 0, 0, 0.3)",
  padding: "10px 25px",
  margin: "10px",
  borderRadius: "5px"
}


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
        <div style={leyend} >
          <h3 style={top}>BUILDING PROTECTION</h3>
          <h1 style={mid}>Expertos en techos de calidad</h1>
          {/* <p style={bottom}>
            Resolvemos cualquier problema con su techo, desde pequeñas fugas hasta daños
            importantes causados por tormentas. Ya sea que necesite una reparación rápida, 
            una instalación completa o un servicio de mantenimiento regular.</p> */}
            <button style={contact}>Contact us</button>
        </div>
        <img src={slides[currentIndex].url} alt={`Slide ${currentIndex + 1}`} style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}/>
    </div>
  );
};

export default ImageSlider;