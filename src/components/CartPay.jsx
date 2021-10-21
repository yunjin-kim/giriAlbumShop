import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

export default function CartPay({cartAlbum, onOrderAlbumCart}) {
  //map에서 setState 쓰면 안 되는 듯?
  
  let totalPrice = cartAlbum.reduce((acc, cur)=>{
    return acc + cur.playcount*10;
  },0)

  const orderAlbumCart = () => {
    onOrderAlbumCart(cartAlbum)
  }

  return (
    <div className="cartPayWrap">
      <div className="cartPay">
        <h2>총 주문 금액</h2>
        <h2>배송비</h2>
        <h2>총 결제 금액</h2>
      </div>
      <div className="cartPayPrice"> 
        <h2>{totalPrice}원</h2>
        <h2>+</h2>
        <h2>
          {
            totalPrice > 20000
            ?  0
            :  2500
          }
          원
        </h2>
        <h2>=</h2>
        <h2>
          {
            totalPrice > 20000
            ?  totalPrice
            :  totalPrice + 2500
          }
          원
        </h2>
      </div>
      <Link to="/order">
        <button onClick={orderAlbumCart} className="payBtn">주문하기</button>
      </Link>
    </div>
  )
}
