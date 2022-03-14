import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const demoLogin = (e) => {
    e.preventDefault();

    const credential = 'Demo-lition';
    const password = 'password';

    return dispatch(sessionActions.login({ credential, password }))
};

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink className="listings-link" exact to="/"> Listings | </NavLink>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <div className='session-links'>
        <LoginFormModal />
        <NavLink className="nav-text-signup" to="/signup">Sign Up</NavLink>
        <button type="submit" className='demo-button' onClick={demoLogin}>DEMO</button>

      </div>
    );
  }
  

  return (
    <ul className='nav-container'>
        <NavLink exact to="/">
      <li className='barebnb-logo'>
        <img alt="" className="airbnb-logo" src="/airbnb-64.png"></img>
        <div className="nav-text-logo">barebnb</div>
      </li>
        </NavLink>
      <li className='home-link'>
        <NavLink className="nav-text" exact to="/"></NavLink>
      </li>
      <li className='loggedin-nav'>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
