import React, { ChangeEvent, FormEvent, useState } from 'react'
import searchIcon from '../img/search.png';
import '../App.css';

type SearchAlbumProps = {
  onSeacrchAlbum: (saerchText: string) => void;
}

export default function SearchAlbum({ onSeacrchAlbum }: SearchAlbumProps) {
  const [saerchText, setSearchText] = useState('');

  const searchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const searchBtnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(saerchText){
      onSeacrchAlbum(saerchText)
    }
  }

  const searchFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(saerchText){
      onSeacrchAlbum(saerchText);
    }
  }

  return (
    <>
      <form className="searchForm" onSubmit={searchFormSubmit}>
        <input className="searchInput" onChange={searchInputChange} />
        <button className="searchBtn" onClick={searchBtnSubmit}>
          <img className="searchIcon" src={searchIcon} alt="검색아이콘" />
        </button>
      </form>
    </>
  )
}
