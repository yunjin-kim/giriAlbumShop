import React from 'react'

export default function MusicList({albums}){
  console.log(albums)
  return (
    <>
      <ul>
        {albums.map(album => (
          <li key={album.url}>
            {album.name}
          </li>
        ))}
      </ul>
    </>
  )
}
