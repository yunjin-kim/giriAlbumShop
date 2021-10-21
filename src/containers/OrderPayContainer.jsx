import React from 'react'
import { useSelector } from 'react-redux'
import OrderPay from '../components/OrderPay';

export default function OrderPayContainer() {
  const orderAlbum = useSelector(state => state.order);

  return (
    <>
      <OrderPay orderAlbum={orderAlbum} />
    </>
  )
}
