import React from 'react';
import { ReactComponent as LogoSVG } from '../../logo.svg';
import './styles/logo.css';

const Logo = (props) => {
  const color = props.color;
  console.log(color);
  return (
    <a href='/' className='logo'>
      <LogoSVG />
    </a>
  );
};

export default Logo;
