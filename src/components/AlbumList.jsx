import React, {lazy, Suspense} from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const AlbumImg = lazy(() => import('./AlbumImg'))

export default function AlbumList({albums}) {
  if(albums.data.error) return <div className="errorMessageNoData">텅..</div>;
  
  return (
    <>
      <h2 className="searchTitle">아티스트 검색걸과</h2>
        <div className="albumWrap">
          {albums.data.topalbums.album.filter(album => album.image[2]['#text'] !== '').map((album) => (
            <div key={album.url} >
              <Suspense fallback={<div className="lazyBox"></div>}>
                <AlbumImg album={album} />
              </Suspense>
                {/* <img src={album.image[2]['#text']} alt="앨범 이미지" /> */}
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
