import React from 'react'
import CartPay from '../components/CartPay'
import { useDispatch, useSelector } from 'react-redux';
import { orderAlbumCart } from '../modules/order.js';

export default function CartPayContainer() {
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onOrderAlbumCart = (order) => dispatch(orderAlbumCart(order));
  
  return (
    <>
      <CartPay cartAlbum={cartAlbum} onOrderAlbumCart={onOrderAlbumCart} />
    </>
  )
}
