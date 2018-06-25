import React, { Component } from 'react';
import './header.css';
import HeaderBrand from './header-brand';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <div className='header'>
          <HeaderBrand/>
          <Link className='header-link' to='/login'>Login</Link>
          <Link className='header-link' to='/register'>Register</Link>
        </div>
      </div>
    );
  }
}

export default Header;