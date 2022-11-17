import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartToggleHandler = ()=>{
    dispatch(cartActions.showCart())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
