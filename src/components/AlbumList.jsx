import React from 'react'
import { Link } from 'react-router-dom';
import AlbumImg from './AlbumImg';
import '../App.css';


export default function AlbumList({ albums }) {  
  if(albums.data.error) return <div className="errorMessageNoData">텅..</div>;

  return (
    <>
      <h2 className="searchTitle">아티스트 검색결과</h2>
        <div className="albumWrap">
          {albums.data.topalbums.album.filter(album => album.image[2]['#text'] !== '').map((album) => (
            <div key={album.url} >
                <AlbumImg album={album} />
              <p>
                <Link to={`/${album.artist.name}:${album.name}`}>{album.name}</Link>
                / {album.artist.name}
              </p>
            </div>
          ))}
        </div>
    </>
  )
}
