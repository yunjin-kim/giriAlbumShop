import React from 'react'
import CartContainer from '../containers/CartContainer'
import "../App.css";
import { useSelector } from 'react-redux';
import CartPayContainer from '../containers/CartPayContainer';

export default function CartPage() {
  const album = useSelector(state => state.cart);

  return (
    <>
      <CartContainer />
      {
        album.length > 0
        ? <CartPayContainer />
        : <div className="errorMessageNoData">텅..</div>
      }
    </>
  )
}
