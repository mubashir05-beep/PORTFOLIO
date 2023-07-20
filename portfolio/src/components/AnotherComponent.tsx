'use client'
import React, { useContext } from 'react'
import { StateContext } from '../../context/stateContext';

const AnotherComponent = () => {
  const context = useContext(StateContext);

  // Optional chaining to access the 'name' property
  const name = context?.name;
  const setName = context?.setName;

  const handleClick = () => {
    // Check if 'setName' is available before calling it
    if (setName) {
      setName('Hello from AnotherComponent');
    }
  };

  return (
    <div>
      <p>Name: {name || 'Guest'}</p>
      <button onClick={handleClick}>Update Name</button>
    </div>
  )
}

export default AnotherComponent;
