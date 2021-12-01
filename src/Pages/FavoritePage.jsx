import { Card, Button, NavItem } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { mainContext } from "../contexts/MainContext";

const FavoritePage = () => {
  const { getFavorites, favorites } = useContext(mainContext);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      {favorites ? (
        favorites.products.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Link to={`/product/${item.id}`}>
                <Button variant="danger">Подробнее...</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default FavoritePage;