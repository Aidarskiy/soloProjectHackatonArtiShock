import React from "react";
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardPage.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "react-credit-cards/es/styles-compiled.css";

import { useHistory } from "react-router-dom";

const CreditCardPage = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const navigate = useHistory();
  return (
    <div className="container">
      <div className="box justify-content-center align-items-center">
        <div className="formDiv">
          <div className="creditCard">
            <Cards
              cvc={values.cardSecurityCode}
              expiry={values.cardExpiration}
              focused={values.focus}
              name={values.cardName}
              number={values.cardNumber}
            />
            <Form onSubmit={handleSubmit}>
              <Form.Group style={{ margin: "10px" }}>
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Имя владельца карты"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Номер карты"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.number}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group style={{ margin: "10px" }}>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Срок хранения"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.exp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group style={{ margin: "10px" }}>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Код безопасности"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cvv}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
                onClick={() => {
                  alert("Благодарим что выбрали нас");
                  navigate.push("/");
                }}
              >
                Подтвердить заказ
              </Button>
            </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardPage;
