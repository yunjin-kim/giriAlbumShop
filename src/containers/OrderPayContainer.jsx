import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderPay from '../components/OrderPay';
import { payAlbumCart } from '../modules/pay';

export default function OrderPayContainer() {
  const orderAlbum = useSelector(state => state.order);
  const dispatch = useDispatch();

  const onPayAlbumCart = (pay) => dispatch(payAlbumCart(pay))

  return (
    <>
      <OrderPay orderAlbum={orderAlbum} onPayAlbumCart={onPayAlbumCart} />
    </>
  )
}
