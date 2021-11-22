import React from 'react'
import CartContainer from '../containers/CartContainer'
import "../App.css";
import { useSelector } from 'react-redux';
import CartPayContainer from '../containers/CartPayContainer';
import { RootState } from '../modules';

export default function CartPage() {
  const album = useSelector((state: RootState) => state.cart);

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
