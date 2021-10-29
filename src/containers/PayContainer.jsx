import React from 'react'
import { useSelector } from 'react-redux'
import Pay from '../components/Pay';

//여기서 목록을 카트로 받으면 안됨 주문 완료하면 카트에 있는 몰록 지워야하기 때문에
export default function PayContainer() {
  const payAlbums = useSelector(state => state.pay);

  console.log(payAlbums)

  return (
    <>
      <Pay payAlbums={payAlbums} />
    </>
  )
}
