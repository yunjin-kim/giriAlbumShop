import React, { useState } from 'react'
import searchIcon from '../img/search.png';
import '../App.css';

export default function SearchAlbum({onSeacrchAlbum}) {
  const [saerchText, setSearchText] = useState('');

  const searchInputChange = (e) => {
    setSearchText(e.target.value);
  }

  const searchBtnSubmit = (e) => {
    e.preventDefault();
    if(saerchText){
      onSeacrchAlbum(saerchText)
    }
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    if(saerchText){
      onSeacrchAlbum(saerchText);
    }
  }

  return (
    <>
      
      <form className="searchForm" onSubmit={searchFormSubmit}>
        <input className="searchInput" onChange={searchInputChange} placeholder="아티스트이름 검색만 되네?" />
        <button className="searchBtn" onClick={searchBtnSubmit}>
          <img className="searchIcon" src={searchIcon} alt="검색아이콘" />
        </button>
      </form>
    </>
  )
}
