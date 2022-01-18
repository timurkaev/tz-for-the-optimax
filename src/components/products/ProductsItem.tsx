import React from 'react';
import {IProducts} from '../App';

interface IProductProps {
  product: IProducts
  addToCart: (product: IProducts) => void
  cartItems: IProducts[]
}

const ProductsItem: React.FC<IProductProps> = ({product, addToCart, cartItems}) => {
  const cartAmount = cartItems.map((el) => {
    if (el.id === product.id) {
      return el.amount;
    }
  });

  return (
    <div className="products__card">
      <div className="products__img-and-name">
        <img className="products__img" src={product.image} alt="product"/>
        <strong>{product.name}</strong>
      </div>
      <div>
        <div className="products__price"><strong>{product.price}</strong> $</div>
        <button onClick={() => addToCart(product)} className="products__btn">
            Add to cart{' '}
          <strong className="cart_amount">{cartAmount}</strong>
        </button>
      </div>
    </div>
  );
};

export default ProductsItem;
