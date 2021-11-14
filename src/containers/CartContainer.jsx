import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart';
import { toggleAlbumCart, deleteAlbumCart, increaseAlbumCart, decreaseAlbumCart, toggleAllAlbumCart } from '../modules/cart';

export default function CartContainer() {
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onToggleAllAlbum = (cartAlbum) => dispatch(toggleAllAlbumCart(cartAlbum));
  const onToggleAlbum = (name) => dispatch(toggleAlbumCart(name));
  const onDeleteAlbum = (name) => dispatch(deleteAlbumCart(name));
  const onIncreaseAlbum = (count) => dispatch(increaseAlbumCart(count));
  const onDecreaseAlbum = (count) => dispatch(decreaseAlbumCart(count));
  
  return (
    <>
      <Cart 
        cartAlbum={cartAlbum} 
        onToggleAllAlbum={onToggleAllAlbum}
        onToggleAlbum={onToggleAlbum} 
        onDeleteAlbum={onDeleteAlbum} 
        onIncreaseAlbum={onIncreaseAlbum}
        onDecreaseAlbum={onDecreaseAlbum}
        />
    </>
  )
}
