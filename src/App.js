import Header from "./components/MealsLayout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/MealsCart/Cart";
import { Fragment, useState } from "react";

function App() {
const [cartIsShown,setCartIsShown]=useState(false);

const showCartHandler=()=>{
  setCartIsShown(true);
}

const hideCartHandler=()=>{
setCartIsShown(false);
}



  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;