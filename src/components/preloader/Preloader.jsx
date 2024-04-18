import React, { useEffect } from 'react';
import './preloader.css';
import { preLoaderAnim } from'../animation/index.js'

const Preloader = () => {

  useEffect(() =>  {
    preLoaderAnim()
  },[]);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Hi There,</span>
        <span>Why are you here?</span>
        <span>Welcome</span>
      </div>
    </div>
    )
}

export default Preloader;
