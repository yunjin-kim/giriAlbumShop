import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../modules/musics';
import MusicList from '../components/MusicList';

export default function MusicListContainer() {
  const { loading, data, error } = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAlbums())
  },[dispatch])

  console.log(data)
  if(loading) return <div>로딩</div>
  if(error) return <div>에러</div>
  if(!data) return null;

  return (
    <>
      <MusicList albums={data} />
    </>
  )
}
