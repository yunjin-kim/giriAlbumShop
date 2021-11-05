import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function MusicList({musics}) {
  if(musics.data.results.albummatches.album.length === 0) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <h2 className="searchTitle">앨범 검색결과</h2>
      <div className="albumWrap">
        {musics.data.results.albummatches.album.filter(album => album.image[2]['#text'] !== '').map((music) => (
          <div key={music.url} >
            <img src={music.image[2]['#text']} alt="앨범 이미지" />
            <p>
              <Link to={`/${music.artist}:${music.name}`}>{music.name}</Link>
              / {music.artist}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}