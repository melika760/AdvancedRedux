import classes from './CartButton.module.css';
import { UiActions } from '../../Store/ui-slice';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch()
  function ClickHandler(){
    dispatch(UiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={ClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
