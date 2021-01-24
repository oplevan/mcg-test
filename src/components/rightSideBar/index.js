import React from 'react';
import './styles/rightSideBar.css';
import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';

const RightSideBar = () => {
  return (
    <div className='rightSideBar'>
      <div className='language-box'>
        <a href='/'>En</a>
      </div>
      <div className='page-message-box'>Welcome to MCG</div>
      <div className='social-box'>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
          <RiFacebookFill />
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
          <IoLogoInstagram />
        </a>
        <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
          <RiTwitterFill />
        </a>
      </div>
    </div>
  );
};

export default RightSideBar;
