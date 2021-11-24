import React from 'react'
import { useSelector } from 'react-redux'
import Order from '../components/Order';
import { RootState } from '../modules';

export default function OrderContainer() {
  const orderList = useSelector((state: RootState) => state.order);

  console.log(orderList)

  return (
    <>
      <Order orderList={orderList} />
    </>
  )
}
