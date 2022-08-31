import React from 'react'

const MapElement = ({color, num, item, _onClick}) => {



  return (
    <div>
        <button className="map-item" style={{backgroundColor: color}} onClick={() => _onClick(num)}>
            {num}
        </button>
        {item}
    </div>
  )
}

export default MapElement