import React from "react";
import "./OrderPage.css";

const OrderPage = () => {
  return (
    <div className="block1">
      <div>
        <div className="titleHead d-flex justify-content-between align-items-center">
          <p>
            Бесплатная доставка по Москве при заказе{" "}
            <strong>от 130$!</strong>
          </p>
          <span>
            | Ежедневно 10:00-20:00 | <br />{" "}
            <a href="https://mail.google.com/mail/u/0/?pli=1#inbox">kazymbaevaidar@gmail.com</a> <br />{" "}
          </span>
        </div>

        <div style={{ textAlign: "left" }}>
          <h1 style={{marginTop: '30px'}}>Доставка</h1>
          <p style={{marginTop: '30px'}}>
            Разместите на этой странице информацию с описанием способов
            доставки, которые использует ваш интернет-магазин.
          </p>
          <span style={{marginTop: '20px', fontSize: '20px'}}><strong><i>Например:</i></strong></span>
          <p style={{marginTop: '10px'}}>
            Наш интернет-магазин осуществляет доставку по Москве и регионам
            России:
          </p>

          <ol style={{marginTop: '30px', listStyle: 'outside'}}>
            <li>Курьерская доставка по Москве — 50$ </li>
            <li>
              Самовывоз из нашего пункта выдачи или розничного магазина –
              бесплатно!
            </li>
            <li>
              Почтовая доставка по России — от 20$ в зависимости от адреса
              доставки.
            </li>
          </ol>

          <span>Сроки доставки:</span>

          <ol style={{marginTop: '30px', listStyle: 'outside'}}>
            <li>Курьерская доставка по Москве – на следующий день</li>
            <li>Самовывоз – на следующий день</li>
            <li>
              Почтовая доставка по России – от 3 до 14 дней в зависимости от
              региона
            </li>
          </ol>

          <span style={{fontWeight: '600'}}>
              Доставка осуществляется бесплатно при сумме заказа более 130$.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
