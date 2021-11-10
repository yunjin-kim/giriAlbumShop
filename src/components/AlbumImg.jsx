import React from 'react';
import LazyLoad from 'react-lazyload';
import '../App.css';


export default function AlbumImg({album}) {
  console.log("레이즈 로드 실행")
  return (
    <>
      <LazyLoad>
        <img src={album.image[2]['#text']} alt="앨범 이미지" />
      </LazyLoad>
    </>
  )
}
