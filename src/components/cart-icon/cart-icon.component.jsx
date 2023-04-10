import  { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import './cart-icon.styles.scss'


const CartIcon = () =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const {quantity} = useSelector ((store) => store.cart);

    const toogleIsCartOpen = () => setIsCartOpen (!isCartOpen)

    return (
        <div className="cart-icon-container" onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">{quantity}</span>
        </div>
    )

}

export default CartIcon;