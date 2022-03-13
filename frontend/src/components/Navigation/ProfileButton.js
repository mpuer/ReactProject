import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    // return <Redirect to="/"/>
  };

  return (
    <div className="user-menu">
      <button id="menu-button" onClick={openMenu}>
      <img alt="" className="profile-button" src="/user.png"></img>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="nav-text">Hello, {user.username}</li>
          <li className="nav-text">{user.email}</li>
          <li>
            <button id="log-out" onClick={logout}>Log Out?</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
