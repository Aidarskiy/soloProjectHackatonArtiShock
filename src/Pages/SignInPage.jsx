import { Formik } from "formik";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import SignGoogle from "../components/SignGoogle/SignGoogle";
import { adminContext } from "../contexts/AdminContex";

const SignInPage = (props) => {
  const history = useHistory();
  const { loginUser } = React.useContext(adminContext);
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),

    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .min(8)
      .max(24)
      .required("Required"),
  });

  const [user, setUser] = useState({ username: "", password: "" });
  // console.log(state)
  function handleChange(e) {
    let userr = { ...user, [e.target.name]: e.target.value };
    setUser(userr);
  }

  function handleLogIn(e) {
    e.preventDefault();
    loginUser(user.username, user.password);
    history.push("/");
    console.log("aaaa");
  }

  return (
    <>
      <div className="signup ">
        <Formik
          validationSchema={schema}
          onSubmit={(data) => console.log(data)}
          initialValues={{
            name: "",

            password: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleLogIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  isValid={!errors.name && touched.name}
                  isInvalid={!!errors.name}
                  type="name"
                  placeholder="Your'e username"
                  value={values.name}
                />
                <Form.Control.Feedback type="inValid">
                  {errors.name}
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
    </>
  );
};

export default SignInPage;
