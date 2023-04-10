import React from 'react'
import './navbar.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'

function Navbar() {
  return (
    <nav>
        <div className="navDiv">
            <h3>Çalışmalarım</h3>
            <div>
                <CartIcon/>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar