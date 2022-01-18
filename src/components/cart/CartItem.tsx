import React from 'react';
import {IProducts} from '../App';

interface ICartItemProps {
  item: IProducts,
  addToCart: (item: IProducts) => void
  removeCart: (id: number) => void
}

const CartItem: React.FC<ICartItemProps> = ({item, addToCart, removeCart}) => {
  return (
    <>
      <div className="cart__item">
        <img className="cart__item-img" src={item.image} alt="product-img"/>
        <strong>{item.name}</strong>
        <div className="cart__item-buttons">
          <div className="cart__item-price">
            <strong>{item.amount * item.price} $</strong>
            <div>{}</div>
          </div>
          <button onClick={() => removeCart(item.id)}>-</button>
          <span style={{margin: '0 5px 0 5px'}}>{item.amount}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
