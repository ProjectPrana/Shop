import "./scss/Wrapper.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Basket />
        <Header />
        <Main />
        <Product />
      </div>
    </div>
  );
}

export default App;
