import React, { useEffect, useState } from 'react'
import AddCartModal from './AddCartModal';
import ExistAlbumOnCart from './ExistAlbumOnCart';
import '../App.css';

// type MusicProps = {
//   album: ArtAlbum;
//   onAddAlbum: (album: ArtAlbum) => void;
//   cartAlbum: AlbumAlbum[];
// }

export default function Music({ album, onAddAlbum, cartAlbum }) {
  const [addModal, setAddModal] = useState(false);
  const [existCart, setExistCart] = useState(false);

  const addCart = () => {
    setAddModal(true);

    return cartAlbum.length <= 0 
      ?  onAddAlbum(album)
      : cartAlbum.find((cartEachAlbum) => (
          cartEachAlbum.album.name === album.name))
          ? setExistCart(true)
          : onAddAlbum(album);
  }

  setTimeout(() => {
    setAddModal(false);
    setExistCart(false);
  }, 2000)

  useEffect(() => {
    return () => {
      setAddModal(false)
      setExistCart(false)
    }
  }, [])

  return (
    <div className="detailPageWrap">
      <img className="eachAlbumImg" src={album.image[2]['#text']} alt="앨범 이미지" />
      <p>{album.name} / {album.artist.name}</p>
      <p>가격: {album.playcount * 10}원</p>
      <button className="cartBtn" onClick={addCart}>장바구니 담기</button>
      {
        addModal && !existCart ?
        <AddCartModal />
        : null
      }
      {
        existCart ? 
        <ExistAlbumOnCart />
        : null
      }
    </div>
  )
}
