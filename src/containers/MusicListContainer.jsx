import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  { getAlbums } from '../modules/musics';
import MusicList from '../components/MusicList';
import "../App.css";

export default function MusicListContainer() {
  const { loading, data, error } = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAlbums())
  },[dispatch])
  
  console.log(data)
  if(loading) return <div>로딩중</div>
  if(error) return <div className="errorMessageNoData">404..</div>
  if(!data) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <MusicList albums={data} />
    </>
  )
}
