import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart';
import { toggleAlbumCart, deleteAlbumCart, increaseAlbumCart, decreaseAlbumCart } from '../modules/cart';

export default function CartContainer() {
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onToggleAlbum = (name) => dispatch(toggleAlbumCart(name));
  const onDeleteAlbum = (name) => dispatch(deleteAlbumCart(name));
  const onIncreaseAlbum = (count) => dispatch(increaseAlbumCart(count));
  const onDecreaseAlbum = (count) => dispatch(decreaseAlbumCart(count));
  
  return (
    <>
      <Cart 
        cartAlbum={cartAlbum} 
        onToggleAlbum={onToggleAlbum} 
        onDeleteAlbum={onDeleteAlbum} 
        onIncreaseAlbum={onIncreaseAlbum}
        onDecreaseAlbum={onDecreaseAlbum}
        />
    </>
  )
}
