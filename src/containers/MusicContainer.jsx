import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Music from '../components/Music';
import { getAlbum } from '../modules/musics';
import { addAlbumCart } from '../modules/cart';

export default function MusicContainer({url}) {
  const { loading, data, error } = useSelector(state => state.albums.album);
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAlbum(url))
  },[dispatch, url])

  const onAddAlbum = album => dispatch(addAlbumCart(album))

  if(loading) return <div>로딩</div>
  if(error) return <div>에러</div>
  if(!data) return null;

  return (
    <>
      <Music album={data} onAddAlbum={onAddAlbum} cartAlbum={cartAlbum} />
    </>
  )
}
