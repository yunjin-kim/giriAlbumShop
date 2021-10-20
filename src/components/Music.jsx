import React, { useEffect, useState } from 'react'
import AddCartModal from './AddCartModal';
import '../App.css';

export default function Music({album, onAddAlbum}) {
  const [addModal, setModal] = useState(false)

  const addCart = () => {
    onAddAlbum(album);
    setModal(true);
  }

  setTimeout(()=>{
    setModal(false)
  },2000)

  useEffect(()=>{
    return () => setModal(false)
  },[])

  return (
    <div className="detailPageWrap">
      <img className="eachAlbumImg" src={album.image[2]['#text']} />
      <p>{album.name} / {album.artist.name}</p>
      <p>가격: {album.playcount*10}원</p>
      <button className="cartBtn" onClick={addCart}>장바구니 담기</button>
      {
        addModal ?
        <AddCartModal />
        : null
      }
      
    </div>
  )
}
