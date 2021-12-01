import React, { Fragment, useEffect } from "react";
import "./Footer.css";
import fb from "./icons/f-b.svg";
import inst from "./icons/inst.svg";
import inicon from "./icons/in.svg";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
//   useEffect(() => {
//     Aos.init({duration: 2500});
// },[])
  return (
    <Fragment>
      <div  className="mainFtr ">
        <div className="coMainFtr">
          <div className="bireki col-3">
            <h5>Покупателям</h5>
            <Link to="/order">
              <a href="#">Доставка</a>
            </Link>
            <Link to="/cart">
              <a href="#">Оплата</a>
            </Link>
            <a href="#">Возврат товара</a>
            <a href="#">Личный кабинет</a>
          </div>
          <div className="bireki col-3">
            <h5>Информация</h5>
            <a href="#">О нас</a>
            <a href="#">FAQ</a>
            <a href="#">Блог</a>
            <a href="#">Контакты</a>
            <a href="#">Обратная связь</a>
          </div>
          <div className="col-3">
            <h5>Мы на связи</h5>
            <span className="number">+996 709 888 470</span>
            <a target="blank" href="https://www.instagram.com/kazymbaev.a/">
              <img style={{ width: 35, height: 35 }} src={fb} />
            </a>
            <a target="blank" href="https://www.instagram.com/kazymbaev.a/">
              <img style={{ width: 35, height: 35 }} src={inst} />
            </a>
            <a target="blank" href="https://www.instagram.com/kazymbaev.a/">
              <img style={{ width: 35, height: 35 }} src={inicon} />
            </a>
          </div>
          <div className="col-3">
            <h5>Подписка на новости</h5>
            <span className="fourth">
              Получите доступ к эксклюзивным скидкам
            </span>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("worked");
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>{" "}
          </div>
        </div>

        <div className="lastdiv">
          <span className="lastSpan">Furnistore ⓒ 2021</span>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(Footer);
