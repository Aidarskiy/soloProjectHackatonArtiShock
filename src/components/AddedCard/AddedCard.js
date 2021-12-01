import React, { Fragment, useContext, useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./AddedCard.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const AddedCard = (props) => {
  const { getProducts, products, deleteProduct, currentPosts } =
    useContext(mainContext);
  const {
    addEndDeletePhoneCart,
    checkPhoneInCart,
    addAndDeleteProductInFavorites,
    checkProductInfavorites,
  } = React.useContext(mainContext);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    getProducts(params.id);
  }, []);

  //
  //TEST

  return (
    <Fragment>
      <div
        style={{ boxShadow: "0px 0px 10px -2px #000000" }}
        className=" card-div "
      >
        {currentPosts.map((item) => (
          <Card
            style={{ boxShadow: "0px 0px 10px -2px #000000" }}
            className="card"
            key={item.id}
          >
            <Card.Body>
              <img
                style={{
                  width: "200px",
                  height: "230px",
                  boxShadow: "0px 0px 10px -2px #000000",
                }}
                src={item.image}
              />

              <Card.Title>ArtishockFlowers</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush  ">
              <ListGroupItem className="inp">{item.name}</ListGroupItem>
              <ListGroupItem className="inp">{item.brand}</ListGroupItem>
              <ListGroupItem className="inp">{item.price}</ListGroupItem>

              <ListGroupItem
                className="inp"
                style={{ height: "250px" }}
                color="red"
              >
                {item.details}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button
                className="card-btn"
                variant="outline"
                onClick={() => addEndDeletePhoneCart(item)}
                size="small"
                style={{ width: "50px", height: "40px" }}
              >
                <ShoppingCartIcon
                  color={checkPhoneInCart(item.id) ? "error" : "secondary"}
                />
              </Button>
              <Button onClick={() => addAndDeleteProductInFavorites(item)}>
                <FavoriteBorderIcon
                  color={checkProductInfavorites(item.id) ? "error" : "black"}
                />
              </Button>

              <Link to={`/showmore/${item.id}`}>
                <Button size="small" variant="contained">
                  Info
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default AddedCard;
