import React from 'react'
import { Link } from 'react-router-dom';
import { persistor } from '../index';
import "../App.css";

export default function OrderPay({ orderAlbum, onPayAlbumCart }) {
  
  let payAlbumPrice = orderAlbum.map((album) => {
    return (album.album.playcount * 10) * (album.count);
  })

  let totalPayAlbumPrice = payAlbumPrice.reduce((a, b) => a + b);



  const payAlbumCart = () => {
    onPayAlbumCart(orderAlbum)
    persistor.purge('cart');
  }

  return (
    <div className="cartPayWrap">
      <div className="cartPay">
        <h2>총 결제 금액</h2>
      </div>
      <div className="cartPayPrice"> 
        <h2>
          {
            totalPayAlbumPrice > 50000
            ?  totalPayAlbumPrice
            :  totalPayAlbumPrice + 2500
          }
          원
        </h2>
      </div>
      <Link to="/pay">
        <button className="payBtn" onClick={payAlbumCart}>결제하기</button>
      </Link>
    </div>
  )
}
