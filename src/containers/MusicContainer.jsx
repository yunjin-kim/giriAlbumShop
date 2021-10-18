import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Music from '../components/Music';
import { getAlbum } from '../modules/musics';

export default function MusicContainer({url}) {
  const { loading, data, error } = useSelector(state => state.albums.album);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAlbum(url))
  },[dispatch, url])

  if(loading) return <div>로딩</div>
  if(error) return <div>에러</div>
  if(!data) return null;

  return (
    <>
      <Music album={data} />
    </>
  )
}
