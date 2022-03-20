import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Favorite.module.scss";
import Sneakers from "../Product/Sneakers/Sneakers";


function Favorite(props) {
  const { items } = props;

  /*-- Логика для рендера карточек "Like" приходящих с Backend--*/
  const [goods, setGoods] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://6231af9e05f5f4d40d80deb1.mockapi.io/like")
      .then((res) => {
        setGoods(res.data);
      });
  }, []);

  /*---------------------------------*/

  /*-- Переменная которая возращает компонент с Props--*/
  const sneakers = goods.map((obg, index) => (
    <Sneakers
      key={index}
      items={items}
      img={obg.img}
      name={obg.name}
      price={obg.price}
      favorite={true}
    />
  ));
  /*---------------------------------*/

  return (
    <div className={styles.product}>
      <div className={styles.product__title}>
        <button className={styles.button__back}>
          <Link to="/">
            <img src="/img/svg/back.svg" alt="#" className={styles.back} />
          </Link>
        </button>
        <h2 className={styles.product__h2}> Мои закладки </h2>
      </div>
      <main className={styles.allSneakers}>{sneakers}</main>
    </div>
  );
}

export default Favorite;
