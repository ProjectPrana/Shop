import React from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/Wrapper.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import Favorite from "./components/Favorite/Favorite";

function App() {
  /*-- Логика для добавления карточки товара в карзину--*/
  const [cardItems, setCardItems] = React.useState([]);
  const items = (obg) => {
    setCardItems([...cardItems, obg]);
  };
  /*---------------------------------*/

  /*-- Логика для открытия корзины -*/
  const [openBasket, satBasket] = React.useState(false);
  /*---------------------------------*/

  return (
    <div className="wrapper">
      <div className="container">
        {openBasket ? (
          <Basket
            itemsToBasket={cardItems}
            setCardItems={setCardItems}
            closeBasket={() => {
              satBasket(false);
            }}
          />
        ) : null}
        <Header
          clickBasket={() => {
            satBasket(true);
          }}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Product items={items} />{" "}
              </Main>
            }
          />
          <Route path="/like" element={<Favorite items={items} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
