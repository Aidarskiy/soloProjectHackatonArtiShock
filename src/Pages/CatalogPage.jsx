import React, { useContext, useEffect } from "react";
import AddedCard from "../components/AddedCard/AddedCard";
import FilterBar from "../components/Filter/FilterBar";
import Pagination from "../components/Pagination/Pagination";
import { mainContext } from "../contexts/MainContext";

const CatalogPage = () => {
  const { products, getProducts } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="blocks">
        <FilterBar className="filter" />
        {products ? (
          products.length ? (
            //
            <>
              <AddedCard />
              <div></div>
            </>
          ) : (
            <div className="empty">
              <h2>Товаров нет</h2>
            </div>
          )
        ) : (
          <h2>Loading...</h2>
        )}{" "}
      </div>
      <Pagination/>
    </>
  );
};

export default CatalogPage;
