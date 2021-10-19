import React from 'react'
import '../App.css';

const CartAblumToggle = ({album, onToggleAlbum}) => {
  
  const toggleCartAlbum = () => {

    onToggleAlbum(album.name)
  }

  return(
    album.done 
    ? 
    <button onClick={toggleCartAlbum}></button>
    :
    <button onClick={toggleCartAlbum}>V</button>
  )
}

export default function Cart({cartAlbum, onToggleAlbum}) {

  if(cartAlbum == "") return <div className="errorMessageNoData">텅..</div>;


  const deleteCartAlbum = (e) => {
    console.log(e.target)
  }
  
  return (
    <div>
        {cartAlbum.map((album)=>(
          <div key={album.name} className="cartEachAlbum">
            <CartAblumToggle album={album} onToggleAlbum={onToggleAlbum} />
            <img className="cartAlbumImg" src={album.image[2]['#text']} />
            <p>{album.name} / {album.artist.name}</p>
            <p>가격: {album.playcount*10}원</p>
            <button onClick={deleteCartAlbum}>X</button>

          </div>
        ))}
    </div>
  )
}
