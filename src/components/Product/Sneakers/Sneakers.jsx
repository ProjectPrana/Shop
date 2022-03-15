import React from "react";
import "./Sneakers.scss";




function Sneakers(props) {
  /*-- Логика для Кнопки sneakers__add--*/
  const [isAdded, satIsAdd] = React.useState(false);
  const onClickPlus = () => {
    satIsAdd(!isAdded);
  };
  /*---------------------------------*/

  /*-- Логика для Кнопки sneakers__like--*/
  const [isLike, setIsLike] = React.useState(false);
  const like = () => {
    setIsLike(!isLike);
  };
  let likeAdd = isLike ? "/img/svg/heart.svg" : "/img/svg/like.svg";
  /*---------------------------------*/

  return (
    <div className="sneakers">
      <img src={props.img} alt="" className="sneakers__model" />
      <h3 className="sneakers__name">{props.name}</h3>
      <div className="sneakers__choice">
        <div className="sneakers__price">
          <span> Цена </span>
          <div className="price">
            {props.price}
            <span> грн. </span>
          </div>
        </div>
        <button className="sneakers__add" onClick={onClickPlus}>
          <img
            src={isAdded ? "/img/svg/add.svg" : "/img/svg/plus.svg"}
            alt=""
            className="plus"
          />
        </button>
      </div>
      <div className="sneakers__like">
        <img onClick={like} src={likeAdd} alt="" className="" />
      </div>
    </div>
  );
}

export default Sneakers;
