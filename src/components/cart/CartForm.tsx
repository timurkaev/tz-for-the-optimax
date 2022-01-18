import React from 'react';
import {IProducts} from '../App';

interface ICartFormProps {
    cartItems: IProducts[]
    setCartItems: (items: IProducts[]) => void
}

const CartForm: React.FC<ICartFormProps> = ({cartItems, setCartItems}) => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [amount, setAmount] = React.useState(1);

  const handleAddProduct = (e:React.SyntheticEvent) => {
    e.preventDefault();

    const newCartItem = {
      id: Date.now(),
      name: name,
      price: Number(price),
      amount: amount
    };
    if (name && price) {
      setCartItems([newCartItem, ...cartItems]);
    }
  };

  return (
    <form className="cart__form">
      <label>
        Product name:
        <input onChange={(e) => setName(e.target.value)} value={name} type="text"/>
      </label>
      <label>
        Price:
        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number"/>
      </label>
      <label>
        Amount
        <input onChange={(e) => setAmount(+e.target.value)} value={amount} type="number"/>
      </label>
      <button disabled={!name || !price} onClick={handleAddProduct}>Add to cart</button>
    </form>
  );
};

export default CartForm;
