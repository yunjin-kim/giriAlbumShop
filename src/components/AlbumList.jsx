import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


export default function AlbumList({albums}) {
  if(albums.data.error) return <div className="errorMessageNoData">텅..</div>;
  
  return (
    <>
      <div className="albumWrap">
        {albums.data.topalbums.album.filter(album => album.image[2]['#text'] !== '').map((album) => (
          <div key={album.url} >
            <img src={album.image[2]['#text']} alt="앨범 이미지" />
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
