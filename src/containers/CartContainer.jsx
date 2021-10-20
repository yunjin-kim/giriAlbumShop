import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart';
import { deleteAlbumCart, toggleAlbumCart } from '../modules/cart';

export default function CartContainer() {
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onToggleAlbum = name => dispatch(toggleAlbumCart(name));
  const onDeleteAlbum = name => dispatch(deleteAlbumCart(name));

  return (
    <>
      <Cart cartAlbum={cartAlbum} onToggleAlbum={onToggleAlbum} onDeleteAlbum={onDeleteAlbum} />
    </>
  )
}
