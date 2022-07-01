import React from 'react';
import './style.css';
export const Loader = () =>{
    return(
        <div className="ui  container">
  <div className="ui active dimmer">
    <div className="ui massive text loader">Loading</div>
  </div>
</div>
    )
}