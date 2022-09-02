import MapElement from './MapElement'
import { useState, useEffect } from 'react'
import React from 'react'

const Legend = ({_onClick}) => {

    
  

    
  return (
    <div>
        <MapElement color={""} num={0} item={"delete"} _onClick={_onClick}/>
        <MapElement color={"red"} num={2} item={"wall"} _onClick={_onClick}/>
        <MapElement color={"green"} num={3} item={"enemy"} _onClick={_onClick}/>
        <MapElement color={"blue"} num={4} item={"treasure"} _onClick={_onClick}/>
        <MapElement color={"brown"} num={5} item={"player"} _onClick={_onClick}/>
        <MapElement color={"pink"} num={6} item={"exit"} _onClick={_onClick}/>
    </div>
  )
}

export default Legend