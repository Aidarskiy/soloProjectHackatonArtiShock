import React, { useContext, useEffect } from "react";
import { Navbar, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import { useHistory } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContex";
import { authContext } from "../../contexts/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const SignGoogle = () => {
  //test
  const { getProducts, getPhones, phonesCountInCart } = useContext(mainContext);
  const { authWithGoogle, user, logOut, email, adminEmail } =
    React.useContext(authContext);

  const { logoutUser, setUser } = React.useContext(adminContext);
  const history = useHistory();
  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    // navigate(newUrl);
    history.push(newUrl);
    getProducts();
    // console.log(newUrl);
  }

  let button;
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
  if (user) {
    let struser = JSON.stringify(user);
    localStorage.setItem("user", struser);
    button = (
      <>
        <Navbar.Collapse
          className=" navbar"
          // style={{width: '390px'}}
        >
          <Navbar.Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // margin: "5px",
              }}
            >
              Signed in as: <Badge bg="secondary">{user.displayName}</Badge>
            </div>
            {user ? (
              user.email === "kazymbaevaidar@gmail.com" ? (
                <Link to="/admin">
                  <Button
                    variant="outlined-success"
                    style={{ height: "30px", width: "70px" }}
                  >
                    Admin
                  </Button>
                </Link>
              ) : null
            ) : null}
          </Navbar.Text>

          <Button
            className=""
            style={{
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outline-success"
            onClick={() => logOut()}
          >
            <LogoutIcon style={{ height: "20px", width: "20px" }} />
            {/* <LoginIcon /> */}
          </Button>
        </Navbar.Collapse>
      </>
    );
  } else {
    button = (
      <>
        {/* <Button
          className="me-2 text-success"
          variant="outline-dark"
          onClick={handleShowLogin}
        >
          Log In
        </Button>
        <Button
          className="me-2 text-success"
          variant="outline-dark"
          onClick={handleShow}
        >
          Sign Up
        </Button> */}
        <Button
          style={{
            height: "30px",
            width: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="outline-success"
          onClick={authWithGoogle}
        >
          <LoginIcon style={{ height: "15px", width: "15px" }} />
          {/* <h2>Sign with google</h2> */}
        </Button>
      </>
    );
  }

  let temp;
  if (email === adminEmail) {
    temp = (
      <Link to="/admin">
        <Button variant="contained">Admin</Button>
      </Link>
    );
  }

  return (
    <>
      <div>
        <div>{button}</div>
      </div>
    </>
  );
};

export default SignGoogle;
