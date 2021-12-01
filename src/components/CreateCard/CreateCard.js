import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import * as yup from "yup";
import { Formik } from "formik";
import "./CreatedCard.css";

const CreateCard = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    details: "",
    image: "",
  });

  const data = useContext(mainContext);
  const { createProduct } = data;
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    brand: yup.string().min(2).max(30).required("Required"),
    price: yup.string().min(2).max(30).required("Required"),
    details: yup.string().min(4).max(1000).required("Required"),
    image: yup.string().required("required"),
  });
  return (
    <div>
      <div>
        <Formik
          validationSchema={schema}
          onSubmit={(data) => {
            createProduct(data);
            history.push("/");
          }}
          initialValues={{
            name: "",
            brand: "",
            price: "",

            details: "",
            image: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className=" container divka col-3" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  isValid={!errors.name && touched.name}
                  isInvalid={!!errors.name}
                  value={values.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  name="brand"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter brand"
                  isValid={!errors.brand && touched.brand}
                  isInvalid={!!errors.brand}
                  value={values.brand}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  name="details"
                  style={{ height: " " }}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter details"
                  isValid={!errors.details && touched.details}
                  isInvalid={!!errors.details}
                  value={values.details}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price product</Form.Label>
                <Form.Control
                  name="price"
                  onChange={handleChange}
                  type="number"
                  placeholder="enter price"
                  isValid={!errors.price && touched.price}
                  isInvalid={!!errors.price}
                  value={values.price}
                />
              </Form.Group>

              <Form.Group className="mb-3 image" controlId="formBasicPassword">
                <Form.Label>image product</Form.Label>
                <Form.Control
                  name="image"
                  onChange={handleChange}
                  type="text"
                  placeholder="enter image"
                  isValid={!errors.image && touched.image}
                  isInvalid={!!errors.image}
                  value={values.image}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="m-3">
        <Link to="/" className="">
          <Button variant="outline-success">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateCard;
