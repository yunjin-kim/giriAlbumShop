import React, { useEffect, useState } from 'react'
import AddCartModal from './AddCartModal';
import '../App.css';
import { ArtAlbum } from '../modules/artistNameTypes';
import { AlbumAlbum } from '../modules/albumNameTypes';

type MusicProps = {
  album: ArtAlbum;
  onAddAlbum: (album: ArtAlbum) => void;
  cartAlbum: AlbumAlbum[];
}

export default function Music({ album, onAddAlbum, cartAlbum }: MusicProps) {
  const [addModal, setAddModal] = useState(false);

  const addCart = () => {
    setAddModal(true);

    return cartAlbum.length <= 0 
      ?  onAddAlbum(album)
      : cartAlbum.find((cartEachAlbum: AlbumAlbum) => (
          cartEachAlbum.name === album.name)) //cartEachAlbum.album.name
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
      <p>가격: {album.playcount * 10}원</p>
      <button className="cartBtn" onClick={addCart}>장바구니 담기</button>
      {
        addModal ?
        <AddCartModal />
        : null
      }
    </div>
  )
}
