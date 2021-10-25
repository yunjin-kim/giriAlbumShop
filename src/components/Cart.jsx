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
  console.log(album.count)
  const increaseAlbum = () => {
    onIncreaseAlbum(album.album.name);
    album.count += 1;
  }

  return(
    <button onClick={increaseAlbum}>+</button>
  )
}

const CartAlbumDecrease = ({album, onDecreaseAlbum}) => {
  console.log(album.count)
  const decreaseAlbum = () => {
    onDecreaseAlbum(album.album.name);
    album.count -= 1;
  }

  return(
    <button onClick={decreaseAlbum}>-</button>
  )
}

// const CartAlbumNumber = ({album}) => {
//   console.log("숫자좀 늘어나")
//   console.log(album.count)

//   return (
//     <>
//       <p>수량</p>
//       <p>{album.count <= 1
//           ? album.count = 1
//           : album.count
//         }
//       </p>
//     </>
//   )
// }

export default function Cart({cartAlbum, onToggleAlbum, onDeleteAlbum, onIncreaseAlbum, onDecreaseAlbum }) {
  if(cartAlbum === "") return <div className="errorMessageNoData">텅..</div>;

  //e.target 어쩌고저쩌고 대신 할 수 있는거 고민
  const deleteAlbum = (e) => {
    onDeleteAlbum(e.target.parentNode.children[2].innerHTML)
  }

  console.log(cartAlbum)
  
  return (
    <>
        {cartAlbum.map((album)=>(
          <div key={album.album.name} className="cartEachAlbum">
            <CartAlbumToggle album={album} onToggleAlbum={onToggleAlbum} />
            <img className="cartAlbumImg" src={album.album.image[2]['#text']} />
            <p>{album.album.name}</p>
            <p>{album.album.artist.name}</p>
            <CartAlbumIncrease album={album} onIncreaseAlbum={onIncreaseAlbum} />
            {album.count}
            {/* <CartAlbumNumber album={album} /> */}
            <CartAlbumDecrease album={album} onDecreaseAlbum={onDecreaseAlbum} />
            <p>가격: {album.playcount*10}원</p>
            <button onClick={deleteAlbum}>X</button>
          </div>
        ))}
    </>
  )
}
