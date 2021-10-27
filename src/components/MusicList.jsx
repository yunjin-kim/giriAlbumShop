import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function MusicList({albums}){
  
  return (
    <>
      <div className="albumWrap">
        {albums.filter(album => album.image[2]['#text'] !== '').map((album) => (
          <div key={album.url} >
            <img src={album.image[2]['#text']} />
            <p>
              <Link to={`/${album.name}`}>{album.name}</Link>
              / {album.artist.name}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}