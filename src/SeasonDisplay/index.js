import React from 'react';
import './style.css';

const getSeason = (lat, month) =>{
    if(month>2 && month<9) return lat >0 ? 'Summer' : 'Winter';
    return lat > 0 ? 'Winter' : 'Summer'
}

export const SeasonDisplay = (props) =>{

    const season = getSeason(props.lat, new Date().getMonth);
    const content = {}
     if(season === 'Summer'){
         content.text ='Lets hit the beach';
         content.icon = 'sun'
     }else{
         content.text ='Burr, it is Snow flake ';
         content.icon = 'snowflake'
     }

    return(
      
   <div className = 'container'>
       <i className={` icon-left massive ${content.icon} icon`}></i>
       <h1>{content.text}</h1>
       <i className={` icon-right massive ${content.icon} icon`}></i>
   </div>
       
    )
}