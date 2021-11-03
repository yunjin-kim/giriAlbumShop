import React, { useState } from 'react'
import searchIcon from '../img/search.png';
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

  const searchFormSubmit = (e) => {
    e.preventDefault();
    onSeacrchAlbum(saerchText);

  }

  return (
    <>
      
      <form className="searchForm" onSubmit={searchFormSubmit}>
        <input className="searchInput" onChange={searchInputChange}  />
        <button className="searchBtn" onClick={searchInputSubmit}>
          <img className="searchIcon" src={searchIcon} alt="검색아이콘" />
        </button>
      </form>
    </>
  )
}
