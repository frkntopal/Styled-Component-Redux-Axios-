import React from 'react';
import './navbar.styles.jsx';
import CartIcon from '../cart-icon/cart-icon.component';
import { NavCartIcon, NavDiv, Title } from './navbar.styles.jsx';

function Navbar() {
  return (
    <NavDiv>
      <Title>Çalışmalarım</Title>
      <NavCartIcon>
        <CartIcon/>
      </NavCartIcon>
    </NavDiv>
  );
}

export default Navbar;
