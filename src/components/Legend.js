import MapElement from './MapElement'
import { useState, useEffect } from 'react'
import React from 'react'

const Legend = () => {

    const [currentElement, setCurrentElement ] = useState(3)
  
    
  return (
    <div>
        <MapElement color={"red"} num={2} item={" WALL "}/>
        <MapElement color={"green"} num={3} item={" ENEMY "}/>
        <MapElement color={"blue"} num={4} item={" TREASURE "}/>
        <MapElement color={"brown"} num={5} item={" PLAYER "}/>
        <MapElement color={"pink"} num={6} item={" EXIT "}/>
    </div>
  )
}

export default Legend