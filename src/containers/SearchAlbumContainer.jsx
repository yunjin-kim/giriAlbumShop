import React from 'react'
import { useDispatch } from 'react-redux'
import { searchAlbum } from '../modules/search';
import SearchAlbum from '../components/SearchAlbum';

export default function SearchAlbumContainer() {
  const dispatch = useDispatch();

  const onSeacrchAlbum = () => dispatch(searchAlbum());

  return (
    <>
      <SearchAlbum onSeacrchAlbum={onSeacrchAlbum} />
    </>
  )
}
