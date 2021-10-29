import React from 'react'

export default function Pay({payAlbums}) {
  const date = new Date;
  const dateArr = ['월','화','수','목','금','토','일'];

  if(!payAlbums || payAlbums.length === 0) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <h1 className="payList">결제 목록</h1>
      {payAlbums.map((pay)=>(
        <div key={pay.album.name} className="cartEachAlbum">
          <div>
            <p>{date.getMonth()}월</p>
            <p>{date.getDate()}일</p>
            <p>{dateArr[date.getDay()-1]}요일</p>
            <p>{date.getHours()}시</p>
            <p>{date.getMinutes()}분</p>
          </div>
          <img className="cartAlbumImg" src={pay.album.image[2]['#text']} />
          <p>{pay.album.name}</p>
          <p>{pay.album.artist.name}</p>
          <p>{pay.count}개</p>
          <p>가격: {(pay.album.playcount*10)*(pay.count)}원</p>
        </div>
      ))}
    </>
  )
}
