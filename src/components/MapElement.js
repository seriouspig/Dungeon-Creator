import React from 'react'

const MapElement = ({color, num, item}) => {



  return (
    <div>
        <button className="map-item" style={{backgroundColor: color}}>
            {num}
        </button>
        {item}
    </div>
  )
}

export default MapElement