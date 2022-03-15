import styles from "./OnBasket.module.scss";

function OnBasket() {
  return (
    <div className={styles.sneakers__info}>
      <div className={styles.sneakers__img}>
        <img src="/img/image5.jpg" alt="" className={styles.sneakers__model} />
      </div>
      <div className={styles.sneakers__description}>
        <h3 className={styles.sneakers__name}>
          Мужские Кроссовки Nike Blazer Mid Suede
        </h3>
        <div className={styles.price}> 12500 <span> грн. </span> </div>
      </div>
      <button className={styles.sneakers__add}>
        <img src="/img/svg/plus.svg" alt="" className={styles.plus} />
      </button>
    </div>
  );
}

export default OnBasket;
