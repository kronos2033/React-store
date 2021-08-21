import './Header.css';
import Cart from '../Cart/Cart';
import logo from '../../img/logo.svg'

export default function Header() {
  return (
    <div className='wrapper '>
    <div className='header'>
      <img className='header__logo' src={logo} />
      <p className='header__title'>React Shop</p>
      <Cart />
      </div>
    </div>
  );
}
