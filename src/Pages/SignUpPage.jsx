import React, { useContext } from "react";
import { Form, Button, Navbar, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../index.css";
import * as yup from "yup";
import { Formik } from "formik";
import { adminContext } from "../contexts/AdminContex";
import { authContext } from "../contexts/AuthContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { mainContext } from "../contexts/MainContext";
import SignGoogle from "../components/SignGoogle/SignGoogle";

const SignUpPage = () => {
  const { signUpUser } = React.useContext(adminContext);
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    lastName: yup.string().min(2).max(30).required("Required"),
    phoneNumber: yup.string().min(9).max(30).required("Required"),
    email: yup.string().email().min(3).max(255).required("Required"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .min(8)
      .max(24)
      .required("Required"),
  });

  function handleSignup(data) {
    console.log("???");
    // e.preventDefault();
    signUpUser(
      data.name,
      data.lastName,
      data.email,
      data.phoneNumber,
      data.password
    );
    history.push("/");
  }
  function handleCloseSubmit() {}
  console.log(handleSignup);

  //
  //
  //
  //
  //
  //
  //

  //

  return (
    <div className="signup">
      <Formik
        validationSchema={schema}
        onSubmit={(data) => {
          handleSignup(data);
        }}
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter your Name"
                isValid={!errors.name && touched.name}
                isInvalid={!!errors.name}
                value={values.name}
              />
              <Form.Control.Feedback type="inValid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="lastName"
                isValid={!errors.lastName && touched.lastName}
                isInvalid={!!errors.lastName}
                type="text"
                placeholder="Enter Last Name"
                value={values.lastName}
              />
              <Form.Control.Feedback type="inValid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="phoneNumber"
                isValid={!errors.phoneNumber && touched.phoneNumber}
                isInvalid={!!errors.phoneNumber}
                type="number"
                placeholder="Enter your Phone"
                value={values.phoneNumber}
              />
              <Form.Control.Feedback type="inValid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                isValid={!errors.email && touched.email}
                isInvalid={!!errors.email}
                type="email"
                placeholder="Enter your email"
                value={values.email}
              />
              <Form.Control.Feedback type="inValid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="password"
                isValid={!errors.password && touched.password}
                isInvalid={!!errors.password}
                type="password"
                placeholder="Password"
                value={values.password}
              />
              <Form.Control.Feedback type="inValid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // width: "350px",
                height: " 80px",
                margin: "10px",
              }}
            >
              <SignGoogle />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
