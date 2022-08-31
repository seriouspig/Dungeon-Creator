import React from 'react'

const MapElement = ({color, num}) => {



  return (
    <div>
        <button className="map-item" style={{backgroundColor: color}}>
            {num}
        </button>
    </div>
  )
}

export default MapElement