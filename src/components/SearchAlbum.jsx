import React, { useState } from 'react'
import '../App.css';

export default function SearchAlbum({onSeacrchAlbum}) {
  const [saerchText, setSearchText] = useState('');

  const searchInputChange = (e) => {
    setSearchText(e.target.value);
  }

  const searchInputSubmit = (e) => {
    e.preventDefault();
    onSeacrchAlbum(saerchText);
  }

  return (
    <>
      <input className="searchInput" onChange={searchInputChange} />
      <button className="searchBtn" onClick={searchInputSubmit}>검색</button>
    </>
  )
}
