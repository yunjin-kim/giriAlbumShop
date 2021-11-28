import React, { useEffect, useState } from 'react'
import AddCartModal from './AddCartModal';
import ExistAlbumOnCart from './ExistAlbumOnCart';
import { ArtAlbum } from '../modules/artistNameTypes';
import { AlbumAlbum } from '../modules/albumNameTypes';
import '../App.css';

type MusicProps = {
  album: [ArtAlbum] | [AlbumAlbum];
  cartAlbum: (AlbumAlbum | ArtAlbum)[];
  onAddAlbum: (album: ArtAlbum | AlbumAlbum) => void;
}

export default function Music({ album, onAddAlbum, cartAlbum }: MusicProps) {
  const [addModal, setAddModal] = useState(false);
  const [existCart, setExistCart] = useState(false);

  const addCart = () => {
    setAddModal(true);

    return cartAlbum.length <= 0 
      ?  onAddAlbum(album[0])
      : cartAlbum.find((cartEachAlbum) => (
          cartEachAlbum.name === album[0].name)) //cartEachAlbum.album.name
          ? setExistCart(true)
          : onAddAlbum(album[0]);
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
      <img className="eachAlbumImg" src={album[0].image[2]['#text']} alt="앨범 이미지" />
      <p>{album[0].name} / {album[0].artist.name}</p>
      <p>가격: {album[0].playcount * 10}원</p>
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
