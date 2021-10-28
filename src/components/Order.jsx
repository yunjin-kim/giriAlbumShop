import React from 'react'
import "../App.css";

// 주문하기 클랙하면 장바구니 목록 겹치는 문제
//주문몰록 페이지에서 벗어나면 주문목록이 초기화 되는 형식으로

export default function Order({orderList}) {
  let orderAlbumPrice = orderList.map((order)=> {
    return (order.album.playcount*10)*(order.count);
  })

  let totalOrderAlbumPrice = orderAlbumPrice.reduce((a,b)=>a+b)

  return (
    <> 
      <h2 className="orderList">주문 목록</h2>
      {orderList.map((order)=>(
        <div key={order.album.name} className="cartEachAlbum">
          <img className="cartAlbumImg" src={order.album.image[2]['#text']} />
          <p>{order.album.name}</p>
          <p>{order.album.artist.name}</p>
          <p>{order.count}개</p>
          <p>가격: {totalOrderAlbumPrice}원</p>
        </div>
      ))}
    </>
  )
}
