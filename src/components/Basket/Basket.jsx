import styles from "./Basket.module.scss";
import OnBasket from "./OnBasket/OnBasket";

function Basket() {
  return (
    <div className={styles.window}>
      <div className={styles.window__basket}>
        <h4 className={styles.basket__title}> Корзина </h4>
        <div className={styles.basket__goods}>
          <OnBasket/>
        </div>
      </div>
    </div>
  );
}

export default Basket;
