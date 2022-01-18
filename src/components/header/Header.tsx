import React from 'react';
import {AiFillApple, AiOutlineShoppingCart} from 'react-icons/ai';
import {IProducts} from '../App';
import {useNavigate} from 'react-router-dom';

interface IHeaderProps {
    cartItems: IProducts[]
}

const Header: React.FC<IHeaderProps> = ({cartItems}) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav__block">
        <AiFillApple className="apple__icon" onClick={() => navigate('/')}/>
        <nav className="nav">
          <ul>
            <li onClick={() => navigate('/')}>Products</li>
            <li>Mac</li>
            <li>iPhone</li>
            <li>AirPods</li>
          </ul>
        </nav>
      </div>
      <button className="btn" onClick={() => navigate('/cart')}>
        <AiOutlineShoppingCart />
        {cartItems.length === 0 ? null :
              <span className="product__amount-cart">{cartItems.length}</span>
        }
      </button>
    </div>
  );
};

export default Header;
