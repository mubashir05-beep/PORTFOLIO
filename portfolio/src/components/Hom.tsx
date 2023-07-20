'use client'
import React, { useContext } from 'react'
import { StateContext, IContext } from '../../context/stateContext';

const Hom = () => {
  const context = useContext(StateContext);

  // Provide a default value for the context
  const { name = '' } = context || ({} as IContext);

  return (
    <div>{name}</div>
  )
}

export default Hom;
