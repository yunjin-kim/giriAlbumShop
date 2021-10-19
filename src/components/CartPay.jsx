import React from 'react'
import "../App.css";

export default function CartPay() {

  return (
    <div className="cartPayWrap">
        <div className="cartPay">
          <h2>총 주문 금액</h2>
          <h2>배송비</h2>
          <h2>총 결제 금액</h2>
        </div>
        <div className="cartPayPrice"> 
          <h2>30000</h2>
          <h2>+</h2>
          <h2>2500</h2>
          <h2>+</h2>
          <h2>32500</h2>
        </div>
      <button className="payBtn">주문하기</button>
    </div>
  )
}
