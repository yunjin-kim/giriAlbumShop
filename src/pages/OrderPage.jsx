import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import OrderContainer from '../containers/OrderContainer'
import OrderPayContainer from '../containers/OrderPayContainer'
import { leaveOrderPage } from '../modules/order';

export default function OrderPage({history}) {
  const dispatch = useDispatch();
  const onLeaveOrderPage = () => dispatch(leaveOrderPage());

  useEffect(()=>{
    return () => {
      console.log("~~~~주문 페이지 떠나기")
      onLeaveOrderPage();
    }
  },[history])

  return (
    <>
      <OrderContainer />
      <OrderPayContainer />
    </>
  )
}
