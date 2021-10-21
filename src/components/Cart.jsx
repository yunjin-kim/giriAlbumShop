import React from 'react'
import '../App.css';

const CartAblumToggle = ({album, onToggleAlbum}) => {

  const toggleCartAlbum = () => {
    onToggleAlbum(album.name)
  }

  return(
    album.click 
    ? 
    <button onClick={toggleCartAlbum}></button>
    :
    <button onClick={toggleCartAlbum}>V</button>
  )
}

export default function Cart({cartAlbum, onToggleAlbum, onDeleteAlbum}) {

  if(cartAlbum === "") return <div className="errorMessageNoData">텅..</div>;

  //e.target 어쩌고저쩌고 대신 할 수 있는거 고민
  const deleteCartAlbum = (e) => {
    onDeleteAlbum(e.target.parentNode.children[2].innerHTML)
  }
  
  return (
    <>
        {cartAlbum.map((album)=>(
          <div key={album.name} className="cartEachAlbum">
            <CartAblumToggle album={album} onToggleAlbum={onToggleAlbum} />
            <img className="cartAlbumImg" src={album.image[2]['#text']} />
            <p>{album.name}</p>
            <p>{album.artist.name}</p>
            <p>가격: {album.playcount*10}원</p>
            <button onClick={deleteCartAlbum}>X</button>
          </div>
        ))}
    </>
  )
}
