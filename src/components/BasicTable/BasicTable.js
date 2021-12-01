import React, { Fragment, useContext, useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button, Table } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";

const AddedCard = (props) => {
  const { getProducts, products, deleteProduct, currentPosts } =
    useContext(mainContext);
  const { addEndDeletePhoneCart, checkPhoneInCart } =
    React.useContext(mainContext);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    getProducts(params.id);
  }, []);

  //
  //TEST
  console.log();
  return (
    <Fragment>
      <div className="container card-div ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    style={{ width: "70px", height: "80px" }}
                    src={item.image}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.details}</td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <Button className="card-btn" variant="outline-primary">
                      Edit
                    </Button>
                  </Link>
                </td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <Button
                      onClick={() => deleteProduct(item.id)}
                      className="card-btn"
                      variant="outline-primary"
                    >
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default AddedCard;
