import React, { useState } from 'react';
import './styles/toggleSwitch.css';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <label className='toggle-switch'>
      <div className={`toggle-label ${isToggled ? 'isToggled' : ''}`}>01</div>
      <input type='checkbox' checked={isToggled} onChange={onToggle} />
      <span className='switch' />
      <div className={`toggle-label ${isToggled ? '' : 'isToggled'}`}>02</div>
    </label>
  );
};

export default ToggleSwitch;
