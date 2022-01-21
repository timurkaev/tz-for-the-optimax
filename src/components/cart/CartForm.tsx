import React, {ChangeEvent} from 'react';
import {IProducts} from '../App';
import {read} from 'fs';

interface ICartFormProps {
    cartItems: IProducts[]
    setCartItems: (items: IProducts[]) => void
}

const CartForm: React.FC<ICartFormProps> = ({cartItems, setCartItems}) => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [amount, setAmount] = React.useState(1);
  const [file, setFile] = React.useState();

  const addFileHandler = (event: any) => {
    const reader = new FileReader();
    reader.onload = (ev: any) => {
      setFile(ev.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleAddProduct = (e:React.SyntheticEvent) => {
    e.preventDefault();

    const newCartItem = {
      id: Date.now(),
      name: name,
      price: Number(price),
      image: file,
      amount: amount
    };
    if (name && price) {
      setCartItems([newCartItem, ...cartItems]);
    }
  };

  return (
    <form data-testid={'form'} className="cart__form">
      <label>
        Product name:
        <input data-testid={'name-input'} onChange={(e) => setName(e.target.value)} value={name} type="text"/>
      </label>
      <label>
        Price:
        <input data-testid={'price-input'} onChange={(e) => setPrice(e.target.value)} value={price} type="number"/>
      </label>
      <label>
        Amount
        <input data-testid={'amount-input'} onChange={(e) => setAmount(+e.target.value)} value={amount} type="number"/>
      </label>
      <label>
        Load file:
        <input
          onChange={addFileHandler}
          type="file" />
      </label>
      <button disabled={!name || !price} onClick={handleAddProduct}>Add to cart</button>
    </form>
  );
};

export default CartForm;
