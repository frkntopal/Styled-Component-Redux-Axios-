import styled from 'styled-components';
import  { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

export const CartContainer = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ShoppingBagIcon = styled(ShoppingIcon)`
      width: 34px;
      height: 34px;
      
`

export const ItemCount = styled.span`
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      bottom: 12px;
`



