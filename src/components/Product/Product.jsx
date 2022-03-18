import axios from "axios";
import React from "react";
import styles from "./Product.module.scss";

import Sneakers from "./Sneakers/Sneakers";

function Product(props) {
  const { items } = props;

  /*-- Логика для рендера карточек приходящих с Backend--*/
  const [goods, setGoods] = React.useState([]);
  React.useEffect(() => {  
    axios.get("https://6231af9e05f5f4d40d80deb1.mockapi.io/goods").then((res) => {
      setGoods(res.data);
    });
  }, []);

  /*---------------------------------*/

  /*-- Логика для фильтра--*/
  const [searchValue, setsearchValue] = React.useState("");

  const onChangeSearch = (event) => {
    setsearchValue(event.target.value);
  };
  /*---------------------------------*/

  const sneakers = goods.filter((obg) => obg.name.toLowerCase().includes(searchValue.toLowerCase())).map((obg, index) => (
      <Sneakers
        key={index}
        items={items}
        img={obg.img}
        name={obg.name}
        price={obg.price}
      />
    ));

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
      <main className={styles.allSneakers}>{sneakers}</main>
    </div>
  );
}

export default Product;
