import React from 'react'



export default function Pay({payAlbum}) {
  if(!payAlbum || payAlbum.length === 0) return <div className="errorMessageNoData">텅..</div>;

  console.log(payAlbum)

  return (
    <>
      <h1 className="payList">결제 목록</h1>
      {payAlbum.map((pay)=>(
        <div key={pay.album.name} className="cartEachAlbum">
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
