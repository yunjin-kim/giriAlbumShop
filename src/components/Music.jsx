import React, { useEffect, useState } from 'react'
import AddCartModal from './AddCartModal';
import '../App.css';

export default function Music({ album, onAddAlbum, cartAlbum }) {
  const [addModal, setAddModal] = useState(false);

  const addCart = () => {
    setAddModal(true);

    return cartAlbum.length <= 0 
      ?  onAddAlbum(album)
      : cartAlbum.find((cartEachAlbum) => (
          cartEachAlbum.album.name === album.name))
          ?  null
          : onAddAlbum(album);
  }

  setTimeout(() => {
    setAddModal(false);
  }, 2000)

  useEffect(() => {
    return () => setAddModal(false)
  }, [])

  return (
    <div className="detailPageWrap">
      <img className="eachAlbumImg" src={album.image[2]['#text']} alt="앨범 이미지" />
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
