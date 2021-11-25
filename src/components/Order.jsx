import React from 'react'
import "../App.css";
import { ArtAlbum } from '../modules/artistNameTypes';

// type OrderProps = {
//   orderList: ArtAlbum[];
// }

export default function Order({ orderList }) {

  console.log(orderList)

  let orderAlbumPrice = orderList.map((order) => {
    return (order.album.playcount * 10) * (order.count);
  })

  let totalOrderAlbumPrice = orderAlbumPrice.reduce((a, b) => a + b);

  return (
    <> 
      <h2 className="orderList">주문 목록</h2>
      {orderList.map((order) => (
        <div key={order.album.name} className="cartEachAlbum">
          <img className="cartAlbumImg" src={order.album.image[2]['#text']} alt="앨범 이미지" />
          <p>{order.album.name}</p>
          <p>{order.album.artist.name}</p>
          <p>{order.count}개</p>
          <p>가격: {totalOrderAlbumPrice}원</p>
        </div>
      ))}
    </>
  )
}
