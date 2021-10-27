import React from 'react'
import { useSelector } from 'react-redux'
import Order from '../components/Order';

export default function OrderContainer() {
  const orderList = useSelector(state => state.order);

  return (
    <>
      <Order orderList={orderList} />
    </>
  )
}
