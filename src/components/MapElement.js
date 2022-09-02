import React from 'react'
import treasure from '../img/treasure.png'

const MapElement = ({color, num, item, _onClick}) => {



  return (
    <div>
        <button className={`map-item ${item}`} onClick={() => _onClick([num,item])}>
            {num}
        </button>
        {item}
    </div>
  )
}

export default MapElement