import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { useGlobalContext } from '../../context'

export default function Cart() {
    const {cart} = useGlobalContext();
    return (
        <section>
            {cart.length>0 ? 
            <React.Fragment>
                <Title name="Your" title="cart"></Title>
                <CartColumns></CartColumns>
                <CartList value={cart}></CartList>
                <CartTotals></CartTotals>
            </React.Fragment> : 
            <EmptyCart ></EmptyCart>
            }
        </section>
    )
}
