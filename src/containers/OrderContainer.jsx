import React from 'react'
import { useSelector } from 'react-redux'
import Order from '../components/Order';

export default function OrderContainer() {
  const orderList = useSelector(state => state.order);
  console.log("두번두번")

  return (
    <>
      <Order orderList={orderList} />
    </>
  )
}
