import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header-brand.css';

class HeaderBrand extends Component {
  render() {
    return (
      <div className='header-brand'>
        <Link to='/'>Honey-Do</Link>
      </div>
    )
  }
}

export default HeaderBrand;