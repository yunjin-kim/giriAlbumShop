import React from 'react'

//데이터 들어오는 형식      //여러개 구매하면
//[{앨범,카운트},년,월,일,{앨범,카운트},{앨범,카운트},년,월,일]

export default function Pay({payAlbums}){
  if(!payAlbums || payAlbums.length === 0) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <h1 className="payList">결제 목록</h1>
      {payAlbums.map((pay)=>(
        <div key={pay.album.name} className="cartEachAlbum">
          <img className="cartAlbumImg" src={pay.album.image[2]['#text']} />
          <div className="payAlbumInfo">
            <p>{pay.album.name}</p>
            <p>{pay.album.artist.name}</p>
          </div>
          <div className="payDate">
            {pay.date.year}.
            {pay.date.month}.
            {pay.date.date}
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
