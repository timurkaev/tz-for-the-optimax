import React from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import ProductsItem from './ProductsItem';
import {IProducts} from '../App';

interface IProductProps {
  addToCart: (item: IProducts) => void
  cartItems: IProducts[]
}

const Products: React.FC<IProductProps> = ({addToCart, cartItems}) => {
  const {items, loading} = useTypedSelector((state) => state.products);

  if (loading) {
    return <strong>Loading...</strong>;
  }

  return (
    <div className="products">
      {items.map((item) => {
        return <ProductsItem cartItems={cartItems} addToCart={addToCart} key={item.id} product={item}/>;
      })}
    </div>
  );
};

export default Products;
