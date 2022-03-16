import styles from "./OnBasket.module.scss";

function OnBasket(props) {
  return (
    <div className={styles.sneakers__info}>
      <div className={styles.sneakers__img}>
        <img
          src={props.img}
          alt=""
          className={styles.sneakers__model}
        />
      </div>
      <div className={styles.sneakers__description}>
        <h3 className={styles.sneakers__name}>{props.name}</h3>
        <div className={styles.price}>
          {props.price} <span> грн. </span>
        </div>
      </div>
      <button className={styles.sneakers__add}>
        <img src="/img/svg/plus.svg" alt="" className={styles.plus} />
      </button>
    </div>
  );
}

export default OnBasket;
