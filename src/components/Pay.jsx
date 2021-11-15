import React from 'react'

export default function Pay({ payAlbums }) {
  if(!payAlbums || payAlbums.length === 0) return (
    <>
      <h2 className="payList">결제 목록</h2>
      <div className="errorMessageNoData">텅..</div>
    </>
  ) 

  return (
    <>
      <h2 className="payList">결제 목록</h2>
      {payAlbums.map((pay) => (
        <div key={pay.album.name + pay.date.second} className="cartEachAlbum">
          <img className="cartAlbumImg" src={pay.album.image[2]['#text']} alt="앨범 이미지" />
          <div className="payAlbumInfo">
            <p>{pay.album.name}</p>
            <p>{pay.album.artist.name}</p>
          </div>
          <div className="payDate">
            {pay.date.year}.
            {pay.date.month}.
            {pay.date.date}/
            {pay.date.hour}:
            {pay.date.minute}
          </div>
          <div className="payPrice">
            <p>가격: {(pay.album.playcount*10)*(pay.count)}원</p>
            <p>{pay.count}개</p>
          </div>
        </div>
      ))}
    </>
  )
}
