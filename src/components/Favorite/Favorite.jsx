import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Favorite.module.scss";
import Sneakers from "../Product/Sneakers/Sneakers";
import { addLike } from "../../Actions/products";


function Favorite(props) {
  const { items } = props;

  /*-- Логика для рендера карточек "Like" приходящих с Backend--*/
  const [goods, setGoods] = React.useState([]);
  React.useEffect(() => {
    addLike(setGoods);
  }, []);

  /*---------------------------------*/

  /*-- Переменная которая возращает компонент с Props--*/
  const sneakers = goods.map((obg) => (
    <Sneakers
      key={`sneakers-${obg.id}`}
      id={obg.id}
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
