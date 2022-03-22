import axios from "axios";
import React from "react";
import { fetchAllProducts } from "../../Actions/products";
import styles from "./Product.module.scss";

import Sneakers from "./Sneakers/Sneakers";

function Product(props) {
  const { items } = props;

  /*-- Логика для рендера карточек приходящих с Backend--*/
  const [goods, setGoods] = React.useState([]);
  React.useEffect(() => {
    fetchAllProducts(setGoods);
  }, []);

  /*---------------------------------*/

  /*-- Логика для фильтра--*/
  const [searchValue, setsearchValue] = React.useState("");

  const onChangeSearch = (event) => {
    setsearchValue(event.target.value);
  };
  /*---------------------------------*/

  /*-- Переменная которая возращает компонент с Props--*/
  const sneakers = goods
    .filter((obg) => obg.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obg, index) => (
      <Sneakers
        cardData = {obg}
        key={index}
        items={items}
        img={obg.img}
        name={obg.name}
        price={obg.price}
      />
    ));

  /*---------------------------------*/

  return (
    <div className={styles.product}>
      <div className={styles.product__title}>
        <h2 className={styles.product__h2}> Все кроссовки </h2>
        <div className={styles.product__search}>
          <img
            src="/img/svg/search.svg"
            alt="search"
            className={styles.search__svg}
          />
          <input
            onChange={onChangeSearch}
            value={searchValue}
            className={styles.search__input}
            placeholder="Поиск"
            type="text"
          />
          {searchValue ? (
            <button
              className={styles.search__close}
              onClick={() => setsearchValue("")}
            >
              <img src="/img/svg/plus.svg" alt="cleanSearch" />
            </button>
          ) : null}
        </div>
      </div>
      <main className={styles.allSneakers}> {sneakers} </main>
    </div>
  );
}

export default Product;
