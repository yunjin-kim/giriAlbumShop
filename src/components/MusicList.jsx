import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function MusicList({albums}){
  const valueAlbum = albums.filter(a => a.image[2]['#text'] !== '');
  return (
    <>
      <div className="albumWrap">
        {valueAlbum.map((album) => (
          <div key={album.url} id={album.url}>
            <img className="albumImg" src={album.image[2]['#text']} />
            <p>
              <Link to={`/${album.url}`}>{album.name}</Link>
              / {album.artist.name}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
