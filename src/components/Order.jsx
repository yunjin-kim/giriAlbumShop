import React from 'react'
import "../App.css";

export default function Order({orderList}) {
  console.log("왜 두번 실행?")
  console.log(orderList)

  return (
    <>
      {orderList.map((order)=>(
        <div key={order.name} className="cartEachAlbum">
          <img className="cartAlbumImg" src={order.image[2]['#text']} />
          <p>{order.name}</p>
          <p>{order.artist.name}</p>
          <p>가격: {order.playcount*10}원</p>
        </div>
      ))}
    </>
  )
}
