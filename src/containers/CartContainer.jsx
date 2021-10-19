import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart';
import { toggleAlbumCart } from '../modules/cart';

export default function CartContainer() {
  const cartAlbum = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onToggleAlbum = name => dispatch(toggleAlbumCart(name));

  console.log(`______${cartAlbum}`)
  return (
    <>
      <Cart cartAlbum={cartAlbum} onToggleAlbum={onToggleAlbum} />
    </>
  )
}
