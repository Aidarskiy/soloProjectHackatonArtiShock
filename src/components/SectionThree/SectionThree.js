import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import "./SectionThree.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionThree = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
},[])
  return (
    
    <div data-aos="zoom-out-up" className="mainBlock d-flex justify-content-evenly flex-wrap my-5">
      <div className="blockOne text-lg-start">
        <span>best choice of November !</span>
        <h3
          style={{
            fontSize: "40px",
            fontWeight: "300",
            letterSpacing: "1.5px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          Coral Charm Peony
        </h3>
        <p>
          They have compound, deeply lobed leaves and large, often fragrant
          flowers, in colors ranging from purple and pink to red, white or
          yellow, in late spring and early summer. The flowers have a short
          blooming season, usually only 7–10 days. Peonies are popular garden
          plants in temperate regions.
        </p>
        <Button style={{border:'1px dotted purple'}} className="btn">Buy for 200$</Button>
      </div>

      <div className="blockTwo">
        <div className="emptyBg"></div>
        <img
          style={{ width: "500px", height: "430px", borderRadius:'30px' }}
          src="https://i.pinimg.com/564x/2f/b1/ba/2fb1ba04a883d1d92a16cb1cc38dcd24.jpg"
        ></img>
      </div>
    </div>
  );
};

export default SectionThree;
