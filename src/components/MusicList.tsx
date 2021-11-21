import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import MusicImg from './MusicImg';
import { AlbumName } from '../modules/albumNameTypes';

type MusicListProps = {
  musics: AlbumName;
}

export default function MusicList({ musics }: MusicListProps) {
  if(!musics.results.albummatches) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <h2 className="searchTitle">앨범 검색결과</h2>
      <div className="albumWrap">
        {musics.results.albummatches.album.filter(album => album.image[2]['#text'] !== '').map((music) => (
          <div key={music.url} >
            <MusicImg music={music} />
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