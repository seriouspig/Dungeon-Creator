import MapElement from './MapElement'
import React from 'react'

const Legend = () => {
  return (
    <div>
        <MapElement color={"red"} num={2}/>
        <MapElement color={"green"} num={3}/>
        <MapElement color={"blue"} num={4}/>
        <MapElement color={"brown"} num={5}/>
        <MapElement color={"pink"} num={6}/>
    </div>
  )
}

export default Legend