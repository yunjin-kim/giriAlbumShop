import React from 'react'
import MusicListContainer from '../containers/MusicListContainer'
import SearchAlbumContainer from '../containers/SearchAlbumContainer';
import '../App.css';

export default function MusiucListPage() {

  return (
    <div>
      <SearchAlbumContainer />
      <MusicListContainer />
    </div>
  )
}
