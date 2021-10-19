import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <h3 className="navTitle">기리보이 월드</h3>
      </Link>
        <h2>취미로히어로활동을하는사람입니다만?</h2>
      <Link to="/cart">
        <h3>장바구니</h3>
      </Link>
        <h3>주문목록</h3>
    </div>
  )
}
