import React from 'react'
import { Link } from 'react-router-dom';
import { filter, go, map, reduce } from '../fx';
import "../App.css";

export default function CartPay({cartAlbum, onOrderAlbumCart}) {
  const date = new Date;
  
  let totalCartPrice = go(
    reduce((a,b) => a + b,
    map((album) => (album.album.playcount*10)*(album.count),
    filter((album) => album.check === true,
    cartAlbum)))
  )

  function noSelectAlbum(e){
    e.preventDefault()
    alert("선택하신 상품이 없습니다")
  }

  const orderAlbumCart = (e) => {
    totalCartPrice === 0
    ? noSelectAlbum(e)
    : cartAlbum.map((album)=>(
      album.date.year = date.getFullYear(),
      album.date.month = date.getMonth()+1,
      album.date.date = date.getDate()
    ))

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
        <h2>
          {
            totalCartPrice
            ? totalCartPrice
            : totalCartPrice = 0
          }
          원
        </h2>
        <h2>+</h2>
        <h2>
          {
            totalCartPrice > 0
            ? totalCartPrice > 50000
              ?  0
              :  2500
            :  0
          }
          원
        </h2>
        <h2>=</h2>
        <h2>
          {
            totalCartPrice > 0
            ?  totalCartPrice > 50000
              ?  totalCartPrice
              :  totalCartPrice + 2500
            :  totalCartPrice = 0
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
