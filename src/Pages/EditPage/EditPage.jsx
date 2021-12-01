import React, { useContext, useEffect, useState, useNavigate } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import * as yup from "yup";
import { Formik } from "formik";
import '././EditPage.css'

const EditPage = () => {
  const data = useContext(mainContext);
  const {
    saveGetProductsEdit,
    productEdit,
    getProductsEdit,
    clearProductEdit,
  } = useContext(mainContext);

  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    brand: yup.string().min(2).max(30).required("Required"),
    price: yup.string().min(2).max(30).required("Required"),
    details: yup.string().min(4).max(1000).required("Required"),
    image: yup.string().required("required"),
  });

  const params = useParams();
  console.log(params);
  useEffect(() => {
    clearProductEdit();
  }, []);
  useEffect(() => {
    getProductsEdit(params.id);
  }, []);
  console.log(productEdit);

  return (
    <div>
      <h1>EDIT PAGE</h1>
      <div>
        <div className='main-edit'>
          {productEdit ? (
            <Formik
              validationSchema={schema}
              onSubmit={(editedProduct) => {
                saveGetProductsEdit(editedProduct);
                history.push("/");
              }}
              initialValues={productEdit}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form onSubmit={handleSubmit} className=" container col-3">
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
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter details"
                      isValid={!errors.details && touched.details}
                      isInvalid={!!errors.details}
                      value={values.details}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      name="price"
                      onChange={handleChange}
                      type="text"
                      placeholder="price"
                      isValid={!errors.price && touched.price}
                      isInvalid={!!errors.price}
                      value={values.price}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      name="image"
                      onChange={handleChange}
                      type="text"
                      placeholder="image"
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
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="m-3">
          <Link to="/" className="">
            <Button variant="outline-success">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
