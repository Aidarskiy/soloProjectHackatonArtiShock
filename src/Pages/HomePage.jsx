import React, { useContext, useEffect } from "react";
import AddedCard from "../components/AddedCard/AddedCard";
import CarouselComp from "../components/Carousel/CarouselComp";
import { mainContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SectionOne from "../components/SectionOne/SectionOne";
import SectionTwo from "../components/SectionTwo/SectionTwo";
import SectionThree from "../components/SectionThree/SectionThree";

const HomePage = () => {
  const { products, getProducts } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>

      {products ? (
        products.length ? (
          //
          <AddedCard products={products} key={products.id} />
          ) : (
            <div className="d-flex h-50">
            <h2>Товаров нет</h2>
          </div>
        )
        ) : (
          <h2>Loading...</h2>
          )}
          <CarouselComp />
      <SectionOne />
      <SectionTwo id="section2" />
      <SectionThree />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
