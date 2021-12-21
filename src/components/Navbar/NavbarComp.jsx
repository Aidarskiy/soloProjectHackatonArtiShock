import React, { useContext, useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../components/photos/CarouselPhotos/ARTISHOCK.svg";
import "./NavbarComp.css";
import { mainContext } from "../../contexts/MainContext";
import { useHistory } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContex";
import { authContext } from "../../contexts/AuthContext";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import SignGoogle from "../SignGoogle/SignGoogle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//Hello
const HomePage = () => {
  //test
  const { getProducts, phonesCountInCart } = useContext(mainContext);
  const { authWithGoogle, user, logOut, email, adminEmail } =
    React.useContext(authContext);

  const { logoutUser, setUser } = React.useContext(adminContext);
  const history = useHistory();
  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    history.push(newUrl);
    getProducts();
  }

  //
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseFavorite = () => setOpen(false);
  const { productsCountInFavorites, getFavorite } =
    React.useContext(mainContext);
  //
  //

  function logout() {
    logoutUser();
    localStorage.clear();
  }

  let struser = localStorage.getItem("user");
  function setuser() {
    if (struser) {
      setUser(JSON.parse(struser));
    }
  }
  useEffect(() => setuser(), [struser]);
  // console.log(user, "user");

  let temp;
  if (email === adminEmail) {
    temp = (
      <Link to="/admin">
        <Button variant="contained">Admin</Button>
      </Link>
    );
  }

  console.log(user);
  return (
    <div className="main-nav mb-3">
      <Navbar className="navbar " bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  my-lg-0"
              style={{ maxHeight: "50px" }}
              navbarScroll
            >
              <Nav.Link className="for-font" href="#action1">
                <Link to="/created" className="catalog">
                  Catalog
                </Link>
              </Nav.Link>
              <Nav.Link className="for-font" href="#action2">
                <Link to="/order" className="catalog">
                  Order
                </Link>
              </Nav.Link>
              <Nav.Link className="for-font" href="#">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/news"
                >
                  News
                </Link>
              </Nav.Link>
              <Nav.Link className="for-font" href="#">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/contacts"
                >
                  Contactss
                </Link>
              </Nav.Link>

              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo"></img>
                </Link>
              </div>
            </Nav>
            <Form className="d-flex ">
              <FormControl
                onChange={(e) => filterProducts("q", e.target.value)}
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
                style={{
                  height: "45px",
                  width: "170px",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
              {user ? temp : <></>}
              <Link to="/favorites">
                <FavoriteBorderIcon />
              </Link>
              <Link to="/cart">
                <IconButton>
                  <Button
                    style={{
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant="outline-success"
                  >
                    <Badge badgeContent={phonesCountInCart} color="error">
                      <ShoppingCartIcon
                        style={{ height: "15px", width: "15px" }}
                      />
                    </Badge>
                  </Button>
                </IconButton>
              </Link>
            </Form>
            <SignGoogle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomePage;
