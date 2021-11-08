import React from 'react'
import LazyLoad from 'react-lazyload'

export default function AlbumImg({album}) {
  return (
    <>
      <LazyLoad>
        <img src={album.image[2]['#text']} alt="앨범 이미지" />
      </LazyLoad>
    </>
  )
}
