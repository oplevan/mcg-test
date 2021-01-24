import React from 'react';
import './styles/mainHome.css';
import { Logo, ToggleSwitch } from '../';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const MainHome = () => {
  return (
    <main>
      <div className='homepage-wrapper'>
        <Logo />
        <div className='home-bgr'></div>
        <div className='feature-container'>
          <div className='welcome'>
            <ToggleSwitch />
            <div className='text'>Welcome</div>
          </div>
          <div className='title'>
            <div>Creating Human</div>
            <div>engagement.</div>
          </div>
          <div className='subtitle'>through technology.</div>
        </div>
        <button className='discover-btn'>
          <HiOutlineArrowNarrowRight /> Discover MCG
        </button>
        <div className='home-link-wrap'>
          <a href='/' className='link active'>
            <div className='link-text'>
              About <br /> MCG
            </div>
            <div className='link-number'>01</div>
          </a>
        </div>
        <div className='home-link-wrap'>
          <div className='big-word-2'>Engagement</div>
          <a href='/' className='link'>
            <div className='link-text'>
              Our <br /> Brands
            </div>
            <div className='link-number'>02</div>
          </a>
        </div>
        <div className='home-link-wrap'>
          <div className='big-word-1'>Human</div>
          <a href='/' className='link'>
            <div className='link-text'>
              explore <br /> careers
            </div>
            <div className='link-number'>03</div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default MainHome;
