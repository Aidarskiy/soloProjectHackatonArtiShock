import React, { useEffect } from "react";
import "./SectionTwo.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import Aos from "aos";
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });

const SectionTwo = ({ id }) => {
  useEffect(() => {
    Aos.init({duration: 3000});
},[])
  return (
    <div id={id} className="mainBlockOfPics">
      <h1 style={{ marginTop: "40px", marginBottom: "80px" }}>
        our wonderful Astishock flowers
      </h1>

      <div className="twoPics">
        <div
          style ={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          
          <div data-aos='fade-down-right' className="pic1">
            <a href="#">
              <img
                style={{ paddingBottom: "35px", height: "auto", borderRadius:'60px' }}
                src="https://i.pinimg.com/564x/14/a5/be/14a5be2888f8f319c1266f994f2548c5.jpg"
              ></img>
              <span>gorgeous</span>
            </a>
          </div>

          <div data-aos='fade-down-left' className="pic2">
            <a href="#">
              <img
                style={{ paddingBottom: "35px", borderRadius:'60px' }}
                src="https://i.pinimg.com/564x/a7/d9/e4/a7d9e4d5b17852bf8be529b1ebe9e448.jpg"
              ></img>
              <span>aesthetic</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
