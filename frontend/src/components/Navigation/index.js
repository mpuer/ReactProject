import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink className="nav-text" exact to="/listings">Listings  </NavLink>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="nav-text-signup" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='nav-container'>
      <li className='barebnb-logo'>
        <img className="airbnb-logo" src="/airbnb-64.png"></img>
        <div className="nav-text-logo">barebnb</div>
      </li>
      <li className='home-link'>
        <NavLink className="nav-text" exact to="/">Home</NavLink>
      </li>
      <li className='loggedin-nav'>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
