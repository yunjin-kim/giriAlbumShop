import React from 'react'
import '../App.css';

const CartAlbumToggle = ({album, onToggleAlbum}) => {
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

const CartAlbumIncrease = ({album, onIncreaseAlbum}) => {
  
  const increaseAlbum = () => {
    onIncreaseAlbum(album.album.name);
    album.count += 1;
  }

  return(
    <button onClick={increaseAlbum}>+</button>
  )
}

const CartAlbumDecrease = ({album, onDecreaseAlbum}) => {
  
  const decreaseAlbum = () => {
    onDecreaseAlbum(album.album.name);
    album.count -= 1;
  }

  return(
    <button onClick={decreaseAlbum}>-</button>
  )
}


export default function Cart({cartAlbum, onToggleAlbum, onDeleteAlbum, onIncreaseAlbum, onDecreaseAlbum }) {
  if(cartAlbum === "") return <div className="errorMessageNoData">텅..</div>;

  //e.target 어쩌고저쩌고 대신 할 수 있는거 고민
  const deleteAlbum = (e) => {
    onDeleteAlbum(e.target.parentNode.children[2].innerHTML)
  }

  
  return (
    <>
        {cartAlbum.map((cartEachAlbum)=>(
          <div key={cartEachAlbum.album.name} className="cartEachAlbum">
            <CartAlbumToggle album={cartEachAlbum} onToggleAlbum={onToggleAlbum} />
            <img className="cartAlbumImg" src={cartEachAlbum.album.image[2]['#text']} />
            <p>{cartEachAlbum.album.name}</p>
            <p>{cartEachAlbum.album.artist.name}</p>
            <CartAlbumIncrease album={cartEachAlbum} onIncreaseAlbum={onIncreaseAlbum} />
            {cartEachAlbum.count <= 1 
            ? cartEachAlbum.count = 1
            : cartEachAlbum.count}
            <CartAlbumDecrease album={cartEachAlbum} onDecreaseAlbum={onDecreaseAlbum} />
            <p>가격: {cartEachAlbum.album.playcount*10}원</p>
            <button onClick={deleteAlbum}>X</button>
          </div>
        ))}
    </>
  )
}
