import React, { useState } from 'react';
import { Menu } from '../';
import './styles/sideBar.css';
import { Logo } from '../';

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenuHandler = () => {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      const menu = document.querySelector('.nav-inner');
      menu.classList.add('close');
      setTimeout(() => {
        setShowMenu(false);
      }, 250);
    }
  };
  return (
    <>
      <div className='sideBar-wrapper'>
        <div className='sideBar-container'>
          <div
            className={`toggle-menu ${showMenu ? 'show' : ''}`}
            onClick={() => openMenuHandler()}
          >
            <div className='bar-1'></div>
            <div className='bar-2'></div>
          </div>
          <div className='scroll-indicator'>
            <div className='bar'></div>
            <div>scroll</div>
            <div>to navigate</div>
          </div>
          <Logo />
        </div>
      </div>
      {showMenu ? <Menu /> : null}
    </>
  );
};

export default SideBar;
