import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import OrderContainer from '../containers/OrderContainer'
import OrderPayContainer from '../containers/OrderPayContainer'
import { leaveOrderPage } from '../modules/order';

type OrderPageProps = {
  history: History;
}

type History = {
  action: string;
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
  }
}

export default function OrderPage({ history }: OrderPageProps) {
  console.log(history)
  const dispatch = useDispatch();
  const onLeaveOrderPage = () => dispatch(leaveOrderPage());

  useEffect(() => {
    return () => {
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
