import React from "react";
import "./Product.scss";

import Sneakers from "./Sneakers/Sneakers";

function Product(props) {
  const {hi} = props;

  const [goods, setGoods] = React.useState([]);  
  React.useEffect(() => {
    fetch("https://6231af9e05f5f4d40d80deb1.mockapi.io/goods")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setGoods(json);
      });
  }, []);

  const sneakers = goods.map((obg,index) => (
    <Sneakers
      key={index}
      new={hi}
      img={obg.img}
      name={obg.name}
      price={obg.price}
    />
  ));

  return (
    <div className="product">
      <div className="product__title">
        <h2 className="product__h2"> Все кроссовки </h2>
        <div className="product__search input">
          <img src="/img/svg/search.svg" alt="search" className="search__svg" />
          <input className="search__input" placeholder="Поиск" type="text" />
        </div>
      </div>
      <main className="allSneakers">{sneakers}</main>
    </div>
  );
}

export default Product;
