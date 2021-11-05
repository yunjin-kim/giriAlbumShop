import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { getAlbumsAlbumName } from '../modules/musics';
import MusicList from '../components/MusicList';

export default function MusicListContainer() {
  const { loading, data, error } = useSelector(state => state.albums.musics);
  const searchText = useSelector(state => state.search)
  const dispatch = useDispatch();

  console.log("앨범으로 검색")
  console.log(data)
  

  useEffect(() => {
    dispatch(getAlbumsAlbumName(searchText))
  },[dispatch, searchText]);

  if(loading) return <div>로딩중</div>
  if(error) return <div className="errorMessageNoData">404..</div>
  if(!data) return <div className="errorMessageNoData">텅..</div>;
  
  return (
    <>
      <MusicList musics={data} />
    </>
  )
}
