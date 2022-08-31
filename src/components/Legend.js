import MapElement from './MapElement'
import { useState, useEffect } from 'react'
import React from 'react'

const Legend = ({_onClick}) => {

    
  

    
  return (
    <div>
        <MapElement color={"red"} num={2} item={" WALL "} _onClick={_onClick}/>
        <MapElement color={"green"} num={3} item={" ENEMY "} _onClick={_onClick}/>
        <MapElement color={"blue"} num={4} item={" TREASURE "} _onClick={_onClick}/>
        <MapElement color={"brown"} num={5} item={" PLAYER "} _onClick={_onClick}/>
        <MapElement color={"pink"} num={6} item={" EXIT "} _onClick={_onClick}/>
    </div>
  )
}

export default Legend