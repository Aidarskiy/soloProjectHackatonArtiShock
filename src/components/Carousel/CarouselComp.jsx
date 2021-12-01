import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComp.css";
// import slide1 from "./photos/1.jpg";
// import slide2 from "./photos/2.jpg";
// import slide3 from "./photos/img4k.jpg";
// import slide4 from "./photos/img4k1.jpg";
// import slide5 from "./photos/7.jpg";
// import Vid from "./photos/vid.gif";
import gifVideo from './короткое_видео_цветы.gif'
import Aos from "aos";
import "aos/dist/aos.css";

const CarouselComp = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="flip-left" className="caruselka">
      <Carousel fade>
        <Carousel.Item>
          <hr />
          <img
            style={{ objectFit: "cover" }}
            className="d-block"
            src={gifVideo}
            alt="First slide"
          ></img>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <hr />
          <img
            style={{ objectFit: "cover" }}
            className="d-block"
            src="https://images.pexels.com/photos/3838285/pexels-photo-3838285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <hr />
          <img
            style={{ objectFit: "cover" }}
            className="d-block"
            src="https://images.pexels.com/photos/129065/pexels-photo-129065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
