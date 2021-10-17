import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMusics } from '../api/albums';
import MusicList from '../components/MusicList';

export default function MusicListContainer() {
  const { loading, data, error } = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMusics())
  },[dispatch])

  if(loading) return <div>로딩</div>
  if(error) return <div>에러</div>

  return (
    <>
      <MusicList albums={data} />
    </>
  )
}
