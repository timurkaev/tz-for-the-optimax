import React from 'react';
import {IProducts} from '../App';
import {AiOutlineInbox} from 'react-icons/ai';
import CartItem from './CartItem';
import CartForm from './CartForm';

interface ICartProps {
  cartItems: IProducts[]
  setCartItems: (cartItems: IProducts[]) => void
  addToCart: (items: IProducts) => void
  removeCart: (id: number) => void
}

const Cart: React.FC<ICartProps> = ({cartItems, addToCart, removeCart, setCartItems}) => {
  const totalCount = (items: IProducts[]) => {
    return items.reduce((res: number, item) => res + item.amount * item.price, 0);
  };

  return (
    <div className="cart">
      <CartForm setCartItems={setCartItems} cartItems={cartItems}/>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ?
        <div className="empty__cart">
          <strong>No items your cart</strong>
          <AiOutlineInbox className="empty__cart-icon"/>
        </div> :
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          {cartItems.map((item) => (
            <CartItem removeCart={removeCart} addToCart={addToCart} key={item.id} item={item} />
          ))}
        </div>
        <div className="cart__total-price">
          <h2>Total price: {totalCount(cartItems)} $</h2>
          <button className="cart__total-btn">Continue</button>
        </div>
      </div>}
    </div>
  );
};

export default Cart;
