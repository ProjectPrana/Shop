import React from "react";
import "./scss/Wrapper.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  const [cardItems, setCardItems] = React.useState([ ]);
  
  const hi = ((obg) => { setCardItems([...cardItems, obg]) });

  const [openBasket, satBasket] = React.useState(false);  


  return (
    <div className="wrapper">
      <div className="container">
        {openBasket ? (<Basket items={cardItems} closeBasket={() => {satBasket(false)}}/>): null}
        <Header clickBasket={() => {satBasket(true);}}/>
        <Main />
        <Product hi={hi}/>
      </div>
    </div>
  );
}

export default App;
