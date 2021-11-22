import React from 'react'
import AlbumListContainer from '../containers/AlbumListContainer'
import SearchAlbumContainer from '../containers/SearchAlbumContainer';
import MusicListContainer from '../containers/MusicListContainer';
import '../App.css';

export default function AlbumListPage() {

  return (
    <>
      <SearchAlbumContainer />
      <AlbumListContainer />
      <MusicListContainer />
    </>
  )
}
