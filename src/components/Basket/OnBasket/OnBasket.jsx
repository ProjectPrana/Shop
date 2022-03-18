import axios from "axios";
import styles from "./OnBasket.module.scss";

function OnBasket(props) {
  /*-- Удаление карточки из корзины в React и с Backend --*/
  const deletCard = (id) => {
    axios.delete(`https://6231af9e05f5f4d40d80deb1.mockapi.io/Basket/${id}`);
    props.setCardItems((prev) => prev.filter((item) => item.id !== id));
  };
  /*---------------------------------*/
  
  return (
    <div className={styles.sneakers__info}>
      <div className={styles.sneakers__img}>
        <img src={props.img} alt="" className={styles.sneakers__model} />
      </div>
      <div className={styles.sneakers__description}>
        <h3 className={styles.sneakers__name}>{props.name}</h3>
        <div className={styles.price}>
          {props.price} <span> грн. </span>
        </div>
      </div>
      <button
        className={styles.sneakers__add}
        onClick={() => deletCard(props.id)}
      >
        <img src="/img/svg/plus.svg" alt="" className={styles.plus} />
      </button>
    </div>
  );
}

export default OnBasket;
