import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchProductsStart} from '../redux/types/productsAction';
import Header from './header/Header';
import Cart from './cart/Cart';
import Products from './products/Products';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export interface IProducts {
    id: number,
    name: string,
    price: number,
    image?: string,
    amount: number
}

const App = () => {
  const [cartItems, setCartItems] = React.useState([] as IProducts[]);

  const addProductToCart = (productCart: IProducts) => {
    setCartItems((prev) => {
      const isProductCart = prev.find((item) => item.id === productCart.id);

      if (isProductCart) {
        return prev.map((item) => (
            item.id === productCart.id ? {...item, amount: item.amount + 1}: item));
      }
      return [...prev, {...productCart, amount: 1}];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.reduce((arr, item) => {
      if (item.id === id) {
        if (item.amount === 1) {
          return arr;
        }
        return [...arr, {...item, amount: item.amount - 1}];
      } else {
        return [...arr, item];
      }
    }, [] as IProducts[]));
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Header cartItems={cartItems} />
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={
              <Products
                cartItems={cartItems}
                addToCart={addProductToCart}
              />}
            />
            <Route path="/cart" element={
              <Cart
                setCartItems={setCartItems}
                removeCart={removeFromCart}
                cartItems={cartItems} addToCart={addProductToCart}
              />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
