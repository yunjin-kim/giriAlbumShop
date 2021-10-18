import React from 'react'
import '../App.css';

export default function Music({album}) {

  return (
    <>
      <img className="albumImg" src={album.image[2]['#text']} />
      <p>{album.name} / {album.artist.name}</p>
    </>
  )
}
