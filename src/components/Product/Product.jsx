import React from "react";
import "./Product.scss";

import Sneakers from "./Sneakers/Sneakers";

const arr = [
  {
    img: "/img/sneakers1.jpg",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
  },
  {
    img: "/img/sneakers2.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 8760,
  },
  {
    img: "/img/sneakers3.jpg",
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15790,
  },
  {
    img: "/img/sneakers4.jpg",
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 6700,
  },
  {
    img: "/img/sneakers5.jpg",
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 10350,
  },
  {
    img: "/img/sneakers6.jpg",
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: 7890,
  },
  {
    img: "/img/sneakers7.jpg",
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 13400,
  },
];

const sneakers = arr.map((obg) => (
  <Sneakers img={obg.img} name={obg.name} price={obg.price} />
));

function Product() {
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
