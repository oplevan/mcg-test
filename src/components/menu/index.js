import React from 'react';
import './styles/menu.css';

const Menu = () => {
  return (
    <div className='nav-container'>
      <div className='nav-inner'>
        <ul className='main-menu'>
          <li className='menu-item'>
            <a href='/'>
              <span className='menu-item-no'>01</span>
              About MCG
            </a>
          </li>
          <li className='menu-item'>
            <a href='/'>
              <span className='menu-item-no'>02</span>
              Our brands
            </a>
          </li>
          <li className='menu-item'>
            <a href='/'>
              <span className='menu-item-no'>03</span>
              Explore Careers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
