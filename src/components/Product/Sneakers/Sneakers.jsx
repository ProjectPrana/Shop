import axios from "axios";
import React from "react";
import styles from "./Sneakers.module.scss";

function Sneakers(props) {
  /*-- Логика для Кнопки sneakers__add--*/
  const [isAdded, satIsAdd] = React.useState(false);
  const onClickPlus = () => {
    axios.post("https://6231af9e05f5f4d40d80deb1.mockapi.io/Basket", {
      img: props.img,
      name: props.name,
      price: props.price,
    });
    props.items({ img: props.img, name: props.name, price: props.price });
    satIsAdd(!isAdded);
  };
  /*---------------------------------*/

  /*-- Логика для Кнопки sneakers__like--*/

  /*-- Визуально --*/
  const [isLike, setIsLike] = React.useState(false);
  const like = () => {
    setIsLike(!isLike);
    /*-- Сервер --*/
    axios.post("https://6231af9e05f5f4d40d80deb1.mockapi.io/like", {
      img: props.img,
      name: props.name,
      price: props.price,
    });
  };
  let likeAdd = isLike ? "/img/svg/heart.svg" : "/img/svg/like.svg";
  /*---------------------------------*/

  return (
    <div className={styles.sneakers}>
      <img src={props.img} alt="" className={styles.sneakers__model} />
      <h3 className={styles.sneakers__name}>{props.name}</h3>
      <div className={styles.sneakers__choice}>
        <div className={styles.sneakers__price}>
          <span> Цена </span>
          <div className={styles.price}>
            {props.price}
            <span> грн. </span>
          </div>
        </div>
        <button className={styles.sneakers__add} onClick={onClickPlus}>
          <img
            src={isAdded ? "/img/svg/add.svg" : "/img/svg/plus.svg"}
            alt="#"
            className={styles.plus}
          />
        </button>
      </div>
      <div className={styles.sneakers__like}>
        <img onClick={like} src={likeAdd} alt="like" />
      </div>
    </div>
  );
}

export default Sneakers;
