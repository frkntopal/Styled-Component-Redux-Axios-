import { useSelector } from 'react-redux'


import './cart-icon.styles.jsx'
import { CartContainer, ItemCount, ShoppingBagIcon } from './cart-icon.styles.jsx';


const CartIcon = () =>{    
    const {quantity} = useSelector ((store) => store.cart);

    return (
        <CartContainer>
            <ShoppingBagIcon/>
            <ItemCount>{quantity}</ItemCount>
        </CartContainer>
    )

}

export default CartIcon;