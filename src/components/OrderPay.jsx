import React from 'react'
import "../App.css";

export default function OrderPay({orderAlbum}) {

  let orderPrice = orderAlbum.reduce((acc, cur)=>{
    return acc + cur.playcount*10;
  },0)


  return (
    <div className="cartPayWrap">
      <div className="cartPay">
        <h2>총 결제 금액</h2>
      </div>
      <div className="cartPayPrice"> 
        <h2>
          {
            orderPrice > 20000
            ?  orderPrice
            :  orderPrice + 2500
          }
          원
        </h2>
      </div>
        <button className="payBtn">결제하기</button>
    </div>
  )
}
