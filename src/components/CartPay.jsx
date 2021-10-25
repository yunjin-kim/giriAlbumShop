import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

export default function CartPay({cartAlbum, onOrderAlbumCart}) {
  //map에서 setState 쓰면 안 되는 듯?

  let eachAlbumPrice = cartAlbum.map((album)=> {
    return(album.album.playcount*10)*(album.count)
  })

  let totalAlbumPrice = eachAlbumPrice.reduce((a,b)=>a+b)

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
        <h2>{totalAlbumPrice}원</h2>
        <h2>+</h2>
        <h2>
          {
            totalAlbumPrice > 50000
            ?  0
            :  2500
          }
          원
        </h2>
        <h2>=</h2>
        <h2>
          {
            totalAlbumPrice > 50000
            ?  totalAlbumPrice
            :  totalAlbumPrice + 2500
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
