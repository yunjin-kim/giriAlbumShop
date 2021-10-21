import React from 'react'
import CartPay from '../components/CartPay'
import { useSelector } from 'react-redux';

export default function CartPayContainer() {
  const cartAlbum = useSelector(state => state.cart);
  
  return (
    <>
      <CartPay cartAlbum={cartAlbum} />
    </>
  )
}
