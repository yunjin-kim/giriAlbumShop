import React from 'react'
import CartPay from '../components/CartPay'
import { useDispatch, useSelector } from 'react-redux';
import { orderAlbumCart } from '../modules/order';

export default function CartPayContainer() {
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onOrderAlbumCart = (cart) => dispatch(orderAlbumCart(cart));
  
  return (
    <>
      <CartPay cartAlbum={cartAlbum} onOrderAlbumCart={onOrderAlbumCart} />
    </>
  )
}
