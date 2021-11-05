import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  { getAlbumsArtistName } from '../modules/musics';
import AlbumList from '../components/AlbumList';
import "../App.css";

export default function AlbumListContainer() {
  const { loading, data, error } = useSelector(state => state.albums.albums);
  const saerchText = useSelector(state => state.search)
  const dispatch = useDispatch();

  console.log("아티스트로검색")
  console.log(data)

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
