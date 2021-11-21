import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  { getAlbumsArtistName } from '../modules/musics';
import AlbumList from '../components/AlbumList';
import { RootState } from '../modules';
import "../App.css";

//아티스트 이름으로 검색
export default function AlbumListContainer() {
  // const { loading, data, error } = useSelector((state: RootState) => state.albums.albums);
  const { loading, data, error } = useSelector((state: RootState) => state.albums.albums);
  // console.log(albums.albums.data)
  const saerchText = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAlbumsArtistName(saerchText))
  },[dispatch, saerchText])
  
  if(loading && !data) return <div>로딩중</div>;
  if(error) return <div className="errorMessageNoData">404..</div>;
  if(!data) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <AlbumList albums={data} />
    </>
  )
}
