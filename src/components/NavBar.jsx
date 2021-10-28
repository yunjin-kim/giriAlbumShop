import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  const cartAlbum = useSelector(state => state.cart);
  
  return (
    <div className="navBar">
      <Link to="/">
        <h3 className="navTitle">기리보이 월드</h3>
      </Link>
        <h2>취미로히어로활동을하는사람입니다만?</h2>
      <Link to="/cart">
        <h3>장바구니</h3>
        <p className="cartNum">{cartAlbum.length}</p>
      </Link>
      <Link to="/pay">
        <h3>결제목록</h3>
      </Link>
    </div>
  )
}
