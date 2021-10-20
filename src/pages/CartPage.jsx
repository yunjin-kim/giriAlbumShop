import React from 'react'
import CartPay from '../components/CartPay'
import CartContainer from '../containers/CartContainer'
import "../App.css";
import { useSelector } from 'react-redux';

export default function CartPage() {
  const album = useSelector(state => state.cart);
  console.log(album)

  return (
    <>
      <CartContainer />
      {
        album.length > 0
        ? <CartPay />
        : <div className="errorMessageNoData">텅..</div>
      }
      
    </>
  )
}
