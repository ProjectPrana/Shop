import React from "react";
import styles from "./Basket.module.scss";
import OnBasket from "./OnBasket/OnBasket";

function Basket({closeBasket,itemsToBasket=[]}) {

  const goods = itemsToBasket.map((obg) => (
    <OnBasket img={obg.img} name={obg.name} price={obg.price} />
  ));

  return (
    <div className={styles.window}>
      <div className={styles.window__basket}>
        <div className={styles.basket__header}>
          <h4 className={styles.basket__title}> Корзина </h4>
          <button className={styles.basket__close} onClick={closeBasket}>
            <img src="/img/svg/plus.svg" alt="" className={styles.close} />
          </button>
        </div>
        <div className={styles.basket__goods}>
          {goods}
        </div>
      </div>
    </div>
  );
}

export default Basket;
