import React from "react";
import "./scss/Wrapper.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  /*-- Логика для добавления карточки товара в карзину--*/
  const [cardItems, setCardItems] = React.useState([ ]);  
  const items = ((obg) => { setCardItems([...cardItems, obg]) });
  /*---------------------------------*/

  /*-- Логика для открытия корзины -*/
  const [openBasket, satBasket] = React.useState(false);  
  /*---------------------------------*/

  return (
    <div className="wrapper">
      <div className="container">
        {openBasket ? (<Basket itemsToBasket={cardItems} closeBasket={() => {satBasket(false)}}/>): null}
        <Header clickBasket={() => {satBasket(true);}}/>
        <Main />
        <Product items={items}/>
      </div>
    </div>
  );
}

export default App;
