import MapElement from './MapElement'
import React from 'react'

const Legend = () => {
  return (
    <div>
        <MapElement color={"red"} />
        <MapElement color={"green"}/>
        <MapElement color={"blue"}/>
        <MapElement color={"brown"}/>
        <MapElement color={"pink"}/>
    </div>
  )
}

export default Legend