import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  { getAlbumsArtistName } from '../modules/musics';
import AlbumList from '../components/AlbumList';
import "../App.css";

//아티스트 이름으로 검색
export default function AlbumListContainer() {
  const { loading, data, error } = useSelector(state => state.albums.albums);
  const saerchText = useSelector(state => state.search)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAlbumsArtistName(saerchText))
  },[dispatch, saerchText])
  
  if(loading) return <div>로딩중</div>
  if(error) return <div className="errorMessageNoData">404..</div>
  if(!data) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <AlbumList albums={data} />
    </>
  )
}
