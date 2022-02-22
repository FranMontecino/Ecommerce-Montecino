import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UseCart } from '../Contexts/CartContext';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  const {itemSumatory}= UseCart();
    if(itemSumatory() > 0){
      return (
        <div>
          <IconButton color="inherit">
            <Badge badgeContent={itemSumatory()} color="warning">
              <ShoppingCartIcon fontSize="short"/>
            </Badge>
          </IconButton>
        </div>
      )
    }else{ return(null)}
};

export default CartWidget; 